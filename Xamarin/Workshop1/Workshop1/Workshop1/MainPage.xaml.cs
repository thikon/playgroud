using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;
using Xamarin.Essentials;
using System.Net.Http;
using Newtonsoft.Json;
using Hello.Library;

namespace Workshop1
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {           
            InitializeComponent();

            myButton.Clicked += MyButton_Clicked;
            myListView.ItemTapped += MyListView_ItemTapped;
        }

        
        // Page load after form initialize.
        protected async override void OnAppearing()
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri("http://workshop01sample.azurewebsites.net");

            var response = await client.GetAsync("api/values");
            if(response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                var json = await response.Content.ReadAsStringAsync();
                var customers = JsonConvert.DeserializeObject<List<Customer>>(json);
                myListView.ItemsSource = customers;

            }
        }

        private void MyButton_Clicked(object sender, EventArgs e)
        {
            myLabel.Text = myEntry.Text;

            // insert to memory
            //Application.Current.Properties["Name"] = myEntry.Text;
        }

        private void MyListView_ItemTapped(object sender, ItemTappedEventArgs e)
        {
            var customer = (Customer) e.Item;
            Navigation.PushAsync(new CustomerDetail(customer));
        }

    }
}
