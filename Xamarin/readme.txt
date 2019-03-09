xamarin 

support jdk 1.8 only (android)
.Net standard -> share library project ( new standard from ms)
UWP-> Universal window phone (running everywhere)
github/codebangkok (XamEssentials_Start) * code kit
Ooui web framework (web assembly)
http://university.xamarin.com (learning) -> move on 'Microsoft learn'


Basic library *recommend James Montemagno,praeclarum
Xamarin.Forms.GoogleMap (ios & android support)
Xamarin.Essentials
Xam.Plugin.Media (camera active)
ZXing.Net.Mobile
sqlite-net-pcl (SQLite) ORM style
Plugin.Fingerprint

HttpClient

-> GetAsync return http response + status code
-> GetStringAsync return string response only
-> iOS does not support un secure http without SSL
     1. solve by https://stackoverflow.com/questions/31254725/transport-security-has-blocked-a-cleartext-http
     2. open "Info.plist" and copy code to the buttom line

Xamarin structure
1. App.xaml (stater page)
2. https://docs.microsoft.com/en-us/xamarin/xamarin-forms/app-fundamentals/navigation/

Icon Size::  toolbar = 22 / navigate = 32
