using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Crisp.Data.Entity;
using Crisp.Repository.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Crisp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CardController : Controller
    {
        private readonly ApplicationDbContext context;

        public CardController(ApplicationDbContext context)
        {
            this.context = context;
        }

        //Get All Cards
        [HttpGet]
        public async Task <IActionResult> GetAllCards()
        {
            var getAllCards = await context.Cards.ToListAsync();
            return Ok(getAllCards);
        }

        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("GetSingleCard")]
        public async Task<IActionResult> GetSingleCard([FromRoute] Guid id)
        {
            var getSingleCard = await context.Cards.FirstOrDefaultAsync(x => x.Id == id);

            if(getSingleCard == null)
            {
                return NotFound("No card found !");
            }
            else {
                return Ok(getSingleCard);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddCard([FromBody] Card card)
        {
            card.Id = Guid.NewGuid();
            await context.Cards.AddAsync(card);
            await context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetSingleCard), new { id = card.Id}, card);
        }

        [HttpPost]
        [Route("{id:guid}")]
        public async Task<IActionResult> EditCard([FromRoute] Guid id,  [FromBody] Card card)
        {
            var existingCard = await context.Cards.FirstOrDefaultAsync(x => x.Id == id);
            
            if (existingCard != null)
            {
                existingCard.CardHolderName = card.CardHolderName;
                existingCard.CardNumber = card.CardNumber;
                existingCard.ExpiryMonth = card.ExpiryMonth;
                existingCard.ExpiryYear = card.ExpiryYear;
                existingCard.CVC = card.CVC;
                await context.SaveChangesAsync();
                return Ok(existingCard);
            }

            return NotFound("No card found");
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteCard([FromRoute] Guid id)
        {
            var existingCard = await context.Cards.FirstOrDefaultAsync(x => x.Id == id);
            
            if (existingCard != null)
            {
                context.Cards.Remove(existingCard);
                await context.SaveChangesAsync();
                return Ok(existingCard);
            }

            return NotFound("No card found");
        }
    }
}