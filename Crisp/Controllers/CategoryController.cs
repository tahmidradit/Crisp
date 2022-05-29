using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Crisp.Data.Entity;
using Crisp.Repository.Data;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Crisp.Controllers
{
    #nullable disable
    [Route("api/[Controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        public CategoryController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCategories()
        {
            var getAllCategories = await context.Categories.ToListAsync();
            return Ok(getAllCategories);
        }

        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("GetSingleCategory")]
        public async Task<IActionResult> GetSingleCategory([FromRoute] Guid id)
        {
            var getSingleCategory = await context.Categories.FirstOrDefaultAsync(x => x.Id == id);

            if (getSingleCategory != null)
            {
                return Ok(getSingleCategory);
            }
            return NotFound("Category not found !");
        }

        [HttpPost]
        public async Task<IActionResult> AddCategory([FromBody] Category category)
        {
            category.Id = Guid.NewGuid();
            await context.Categories.AddAsync(category);
            await context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetSingleCategory), new { id = category.Id }, category);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateCategory([FromRoute] Guid id, Category category)
        {
            var getSingleCategory = await context.Categories.FirstOrDefaultAsync(x => x.Id == id);

            if (getSingleCategory != null)
            {
                getSingleCategory.Name = category.Name;
                await context.SaveChangesAsync();
                return Ok(getSingleCategory);
            }
            return NotFound("Category not found !");
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteCategory([FromRoute] Guid id)
        {
            var getSingleCategory = await context.Categories.FirstOrDefaultAsync(x => x.Id == id);

            if (getSingleCategory != null)
            {
                context.Categories.Remove(getSingleCategory);
                await context.SaveChangesAsync();
                return Ok(getSingleCategory);
            }
            return NotFound("Category not found !");
        }
    }
}