using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using ClosedXML.Excel;
using Crisp.Repository.Data;
using Microsoft.AspNetCore.Mvc;

namespace Crisp.Controllers
{
    [ApiController]
    //[Route("api/[controller]")]
    public class ExportController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public ExportController(ApplicationDbContext context)
        {
            this.context = context;
        }

        
       [HttpPost]
       [Route("api/export/excel")]
        public IActionResult Export()
        {
            DataTable dt = new DataTable("Grid");
            dt.Columns.AddRange(new DataColumn[4] { new DataColumn("CustomerId"),
                                            new DataColumn("ContactName"),
                                            new DataColumn("City"),
                                            new DataColumn("Country") });

            var customers = context.Customers.ToList();

            foreach (var customer in customers)
            {
                dt.Rows.Add(customer.CustomerID, customer.ContactName, customer.City, customer.Country);
            }

            using (XLWorkbook wb = new XLWorkbook())
            {
                wb.Worksheets.Add(dt);
                using (MemoryStream stream = new MemoryStream())
                {
                    wb.SaveAs(stream);
                    return File(stream.ToArray(), "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "Grid.xlsx");
                }
            }
        }
    }
}