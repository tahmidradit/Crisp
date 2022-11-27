using System.ComponentModel.DataAnnotations;

namespace Crisp.Data.Entity
{
    public class Student
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string StudentId { get; set; }
        public string Department { get; set; }
    }
}