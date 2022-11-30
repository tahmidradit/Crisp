using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Crisp.Data.Entity
{
    public class Student
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string StudentId { get; set; } = string.Empty;
        public Department Department { get; set; }

        [ForeignKey("DepartmentId")]
        public int DepartmentId { get; set; }
    }
}