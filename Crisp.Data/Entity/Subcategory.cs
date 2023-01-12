namespace Crisp.Data.Entity
{
    public class Subcategory
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public Category Category { get; set; }
        public int CategoryId { get; set; }
    }
}