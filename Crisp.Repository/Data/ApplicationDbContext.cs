using Microsoft.EntityFrameworkCore;

namespace Crisp.Repository.Data
{
    public class ApplicationDbContext : DbContext
    {
       public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base (options) {}
    }
}