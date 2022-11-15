using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Crisp.Data.Entity;
using Crisp.Repository.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Crisp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public BooksController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBooksAsync()
        {
            var getAllBooks = await context.Books.ToListAsync();
            return Ok(getAllBooks);
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetSingleBookAsync([FromRoute] int id)
        {
            var getSingleBookAsync = await context.Books.FirstOrDefaultAsync(books => books.Id == id);

            if(getSingleBookAsync == null)
            {
                return NotFound("No books found !");
            }
            else 
            {
                return Ok(getSingleBookAsync);
            }
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [ActionName("Add")]
        public async Task<IActionResult> Add([FromBody] Book book)
        {
            await context.Books.AddAsync(book);
            await context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetSingleBookAsync), new {id = book.Id}, book);  
        }

        [HttpPost]
        [Route("{id:int}")]
        public async Task<IActionResult> Edit([FromRoute] int id, [FromBody] Book book)
        {
            var bookById = await context.Books.FirstOrDefaultAsync(m => m.Id == id);

            if(bookById != null)
            {
                bookById.Name = book.Name;
                bookById.Author = book.Author;
                bookById.ISBN = book.ISBN;
                await context.SaveChangesAsync();
                return Ok(bookById);
            }
            else 
            {
                return NotFound("No books found !");
            }
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var bookById = await context.Books.FirstOrDefaultAsync(m => m.Id == id);

            if(bookById != null)
            {
                context.Books.Remove(bookById);
                await context.SaveChangesAsync();
                return Ok(bookById);
            }
            else
            {
                return NotFound("No books found !");
            }
        }
    }
}