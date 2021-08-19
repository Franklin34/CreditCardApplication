using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend;
using Backend.Models;

namespace BackendAPI3._1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreditCardController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CreditCardController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/CreditCard
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CreditCard>>> GetTarjetaCredito()
        {
            return await _context.TarjetaCredito.ToListAsync();
        }

        // GET: api/CreditCard/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CreditCard>> GetCreditCard(int id)
        {
            var creditCard = await _context.TarjetaCredito.FindAsync(id);

            if (creditCard == null)
            {
                return NotFound();
            }

            return creditCard;
        }

        // PUT: api/CreditCard/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCreditCard(int id, CreditCard creditCard)
        {
            if (id != creditCard.ID)
            {
                return BadRequest();
            }

            _context.Entry(creditCard).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CreditCardExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CreditCard
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<CreditCard>> PostCreditCard(CreditCard creditCard)
        {
            _context.TarjetaCredito.Add(creditCard);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCreditCard", new { id = creditCard.ID }, creditCard);
        }

        // DELETE: api/CreditCard/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CreditCard>> DeleteCreditCard(int id)
        {
            var creditCard = await _context.TarjetaCredito.FindAsync(id);
            if (creditCard == null)
            {
                return NotFound();
            }

            _context.TarjetaCredito.Remove(creditCard);
            await _context.SaveChangesAsync();

            return creditCard;
        }

        private bool CreditCardExists(int id)
        {
            return _context.TarjetaCredito.Any(e => e.ID == id);
        }
    }
}
