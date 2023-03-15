using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AspCore_MariaDB.Data.Models
{
    [Table("Addresses")]

    public class Addresses
{
     [Key]
    public int Id { get; set; }
    public string Street { get; set; }
    public string Number { get; set; }
    public string Complement { get; set; }
    public string Neighborhood { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string PostalCode { get; set; }

      public ICollection<AddressClient> AddressClients { get; set; }
}
}