import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html'
})
export class HomeComponent {

    firstName: string = 'Sonu';
    isDisabled: boolean = true;

    constructor() {
        console.log('constructor');
        setTimeout(() => {
            console.log('settimeout');
            this.isDisabled = false;
        }, 3000);
    }
}



