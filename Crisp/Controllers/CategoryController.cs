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
    [Route("api/[Controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        public CategoryController(ApplicationDbContext context)
        {
            this.context = context;

        }

        // [HttpGet]
        // public async Task<IActionResult> GetAllCategories()
        // {
        //     var getAllCategories = await context.Categories.ToListAsync();
        //     return Ok(getAllCategories);
        // }

        // [HttpPost]
        // public async Task<IActionResult> CreateCategory([FromBody] Category category)
        // {
        //     category.Id = Guid.NewGuid();
        // }
    }
}