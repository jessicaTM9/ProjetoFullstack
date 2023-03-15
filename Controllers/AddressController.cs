using AspCore_MariaDB.Data;
using AspCore_MariaDB.Data.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AspCore_MariaDB.controllers;

[ApiController]
[Route("api/[controller]")]
public class AddressController : ControllerBase
{
    private readonly AddressService _addressService;

    public AddressController(AddressService addressService)
    {
        _addressService = addressService;
    }

    [HttpGet]
    public IActionResult GetAllAddresses()
    {
        var addresses = _addressService.GetAllAddresses();
        return Ok(addresses);
    }

    [HttpGet("{id}")]
    public IActionResult GetAddressById(int id)
    {
        var address = _addressService.GetAddressById(id);
        if (address == null)
        {
            return NotFound();
        }
        return Ok(address);
    }

    [HttpPost]
    public IActionResult AddAddress(Addresses address)
    {
        _addressService.AddAddress(address);
        return Ok();
    }

    [HttpPut("{id}")]
    public IActionResult UpdateAddress(int id, Addresses address)
    {
        if (id != address.Id)
        {
            return BadRequest();
        }

        _addressService.UpdateAddress(address);
        return Ok();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteAddress(int id)
    {
        _addressService.DeleteAddress(id);
        return Ok();
    }
}
