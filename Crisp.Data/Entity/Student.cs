using System.ComponentModel.DataAnnotations;

namespace Crisp.Data.Entity
{
    public class Student
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string StudentId { get; set; } = string.Empty;
        public string Department { get; set; } = string.Empty;
    }
}