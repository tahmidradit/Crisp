using System.ComponentModel.DataAnnotations;

namespace Crisp.Data.Entity
{
    public class Department
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string DepartmentName { get; set; } = string.Empty;
    }
}