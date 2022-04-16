using System.ComponentModel.DataAnnotations;

namespace Crisp.Data.Entity
{
    public class Category 
    {
        [Key]
        public int ID { get; set; }

        [Required, StringLength(80)]
        public string Name { get; set; }
    }
}