import { Component } from '@angular/core';

@Component({
    selector: 'header-nav',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css']
    
})
export class HeaderComponent {
    navigations = ["Home",
        "About Us",
        "Contact Us"];
}
