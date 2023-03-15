
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AspCore_MariaDB.Data.Models;

public class AddressService
{
    private readonly ApplicationDbContext _dbContext;

    public AddressService(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public List<Addresses> GetAllAddresses()
    {
        return _dbContext.Addresses.ToList();
    }

    public Addresses GetAddressById(int id)
    {
        return _dbContext.Addresses.FirstOrDefault(a => a.Id == id);
    }

    public void AddAddress(Addresses address)
    {
        _dbContext.Addresses.Add(address);
        _dbContext.SaveChanges();
    }

    public void UpdateAddress(Addresses address)
    {
        _dbContext.Addresses.Update(address);
        _dbContext.SaveChanges();
    }

    public void DeleteAddress(int id)
    {
        var address = _dbContext.Addresses.FirstOrDefault(a => a.Id == id);
        if (address != null)
        {
            _dbContext.Addresses.Remove(address);
            _dbContext.SaveChanges();
        }
    }
}
