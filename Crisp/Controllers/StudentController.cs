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
    [Route("[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public StudentController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetStudentsAsync() 
        {
            var getStudents = await context.Students.ToListAsync();
            
            if(getStudents == null)
            {
                return NotFound("No students found !");
            }

            if(getStudents.Count() < 1)
            {
                return NotFound("No students added !");
            }

            return Ok(getStudents);
        }

        [HttpGet("{id:int}")]
        [ActionName("GetStudentAsync")]
        public async Task<IActionResult> GetStudentAsync([FromRoute] int id) 
        {
            var getStudentById = await context.Students.FirstOrDefaultAsync(m => m.Id == id);

            if(getStudentById == null)
            {
                return NotFound("No student found !");
            }

            return Ok(getStudentById);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> AddStudentAsync([FromBody] Student student)
        {
            if(ModelState.IsValid)
            {
                await context.Students.AddAsync(student);
                await context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetStudentAsync), new { id = student.Id}, student); 
            }
            
            return NotFound("No student added. An unexpected error occured.");
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> EditStudentAsync([FromRoute] int id, [FromBody] Student student)
        {
            var getStudentById = await context.Students.FirstOrDefaultAsync(m => m.Id == id);

            if(getStudentById != null)
            {
                getStudentById.Name = student.Name;
                getStudentById.StudentId = student.StudentId;
                getStudentById.Department = student.Department;
                await context.SaveChangesAsync();
                return Ok(getStudentById);
            }
            
            return NotFound("No students found !");
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteStudentAsync([FromRoute] int id)
        {
            var getStudentById = await context.Students.FirstOrDefaultAsync(m => m.Id == id);

            if(getStudentById != null)
            {
                context.Students.Remove(getStudentById);
                await context.SaveChangesAsync();
                return Ok(getStudentById);
            }
            
            return NotFound("No students found !");
        }
    }
}