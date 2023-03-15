using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AspCore_MariaDB.Data.Models
{
    [Table("Clients")]
    public class Client
    {
    public int Id { get; set; }
    public string Name { get; set; }
    public DateTime Birthdate { get; set; }
    public string CPF { get; set; }
    public string RG { get; set; }
    public string Telephone { get; set; }
    public List<Addresses> Addresses { get; set; }
}
}
