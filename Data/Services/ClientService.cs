using ClientAdmin.Data;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AspCore_MariaDB.Data.Models;

public class ClientService
{
    private readonly ApplicationDbContext _dbContext;

    public ClientService(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public List<Client> GetAllClients()
    {
        return _dbContext.Client.ToList();
    }

    public Client GetClientById(int id)
    {
        return _dbContext.Client.FirstOrDefault(c => c.Id == id);
    }

    public void AddClient(Client client)
    {
        _dbContext.Client.Add(client);
        _dbContext.SaveChanges();
    }

    public void UpdateClient(Client client)
    {
        _dbContext.Client.Update(client);
        _dbContext.SaveChanges();
    }

    public void DeleteClient(int id)
    {
        var client = _dbContext.Client.FirstOrDefault(c => c.Id == id);
        if (client != null)
        {
            _dbContext.Client.Remove(client);
            _dbContext.SaveChanges();
        }
    }
}

