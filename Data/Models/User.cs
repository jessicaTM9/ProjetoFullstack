using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AspCore_MariaDB.Data.Models
{
    [Table("Users")]
 
  public class User
{
        [Key]
    public int Id { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }

        public static implicit operator User(IdentityUser v)
        {
            throw new NotImplementedException();
        }
    }
}
