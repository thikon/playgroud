using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using WebAPINetCore.Model;

namespace WebAPINetCore.Service
{
    public class TodoService
    {
        public List<TodoItem> GetAllTodoItem()
        {
            using(StreamReader read = new StreamReader("Source/resource.json"))
            {
                string json = read.ReadToEnd();
                return JsonConvert.DeserializeObject<List<TodoItem>>(json);
            }            
        }

        public TodoItem GetTodoItem(int id)
        {
            using (StreamReader read = new StreamReader("Source/resource.json"))
            {
                string json = read.ReadToEnd();
                var items = JsonConvert.DeserializeObject<List<TodoItem>>(json);
                return items.Where(m => m.id == id).FirstOrDefault();
            }
        }
    }
}
