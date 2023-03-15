using AspCore_MariaDB.Data;
using AspCore_MariaDB.Data.Models;
using ClientAdmin.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace AspCore_MariaDB.controllers;
[Route("api/login")]

public class LoginController : Controller
{
    private readonly ApplicationDbContext _dbContext;

    public LoginController(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet]
    public IActionResult Index()
    {
        return View();
    }

    [HttpPost]
    public async Task<IActionResult> Index(User model)
    {
        if (ModelState.IsValid)
        {
            // Verificar se as credenciais do usuário estão corretas
            var user = await _dbContext.User.FirstOrDefaultAsync(c => c.Username == model.Username && c.Password == model.Password);

            if (user != null)
            {
                // Autenticar o usuário e redirecioná-lo para a página inicial
                // (você pode usar o método SignInAsync do UserManager ou criar um cookie de autenticação personalizado)
                return RedirectToAction("Index", "Home");
            }
            else
            {
                ModelState.AddModelError(string.Empty, "Credenciais inválidas");
            }
        }

        return View(model);
    }
}

