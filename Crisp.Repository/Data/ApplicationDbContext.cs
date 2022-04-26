using Crisp.Data.Entity;
using Microsoft.EntityFrameworkCore;

namespace Crisp.Repository.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
    }
}
