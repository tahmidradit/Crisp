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
    public class DepartmentController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public DepartmentController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetDepartments()
        {
            var getDepartments = await context.Departments.ToListAsync();

            if(getDepartments == null)
            {
                return NotFound("No departments found !");
            }

            if(getDepartments.Count() < 1)
            {
                return NotFound("No departments added !");
            }

            return Ok(getDepartments);
        }

        [HttpPost]
        public async Task<IActionResult> AddDepartment([FromBody] Department department)
        {
            if(ModelState.IsValid)
            {
                await context.Departments.AddAsync(department);
                await context.SaveChangesAsync();
                return Ok(department);
            }

            return NotFound("No departments added !");
        }
    }
}