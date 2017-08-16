import { Component } from '@angular/core';

@Component({
    selector: 'header-nav',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css']
    
})
export class HeaderComponent {
    navigations = [{Name:"Home", route:""},
    {Name:"About Us", route:"AboutUs"},
    {Name:"Contact Us", route:"ContactUs"}];
}
