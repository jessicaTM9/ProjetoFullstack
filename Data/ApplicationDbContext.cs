using AspCore_MariaDB.Data.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AspCore_MariaDB.Data;

public class ApplicationDbContext : IdentityDbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }
     public DbSet<Client> Client { get; set; }
     public DbSet<Addresses> Addresses { get; set; }
     public DbSet<User> User { get; set; }
     public DbSet<AddressClient> AddressClient { get; set; }
}
