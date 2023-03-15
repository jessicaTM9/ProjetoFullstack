using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AspCore_MariaDB.Data.Models
{
    [Table("AddressClient")]
    public class AddressClient
{
     [Key]
    public int ClientId { get; set; }
    public Client Clients { get; set; }
    public int AddressesId { get; set; }
    public Addresses Address { get; set; }
}
}