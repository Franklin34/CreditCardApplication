using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendAPI3._1.Models
{
    public partial class Invoice
    {
        public int Id { get; set; }
        public int Number { get; set; }
        public DateTime Date { get; set; }
        public decimal Value { get; set; }
        public byte Attachment { get; set; }
    }
}
