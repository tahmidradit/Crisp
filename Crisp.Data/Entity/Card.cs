using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Crisp.Data.Entity
{
    public class Card
    {
        public Guid Id { get; set; }
        public string CardHolderName { get; set; }
        public string CardNumber { get; set; }
        public string ExpiryMonth { get; set; }
        public string ExpiryYear { get; set; }
        public int CVC { get; set; }
    }
}