using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPINetCore.Model
{
    public class TodoItem
    {
        public int id { get; set; }
        public DateTime date { get; set; }
        public double temperatureC { get; set; }
        public double temperatureF { get; set; }
        public string summary { get; set; }
    }
}
