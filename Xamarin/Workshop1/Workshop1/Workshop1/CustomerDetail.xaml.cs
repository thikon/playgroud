using Hello.Library;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Workshop1
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class CustomerDetail : ContentPage
	{
		public CustomerDetail ()
		{
			InitializeComponent ();
		}

        public CustomerDetail(Customer customer) : this()
        {
            myLabel.Text = customer.Name;
        }
	}
}