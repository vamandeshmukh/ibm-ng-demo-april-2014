import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html'
})
export class HomeComponent {

    firstName: string = 'Sonu';
    salary: number = 10;
    isDisabled: boolean = true;

    increaseSalary = () => {
        console.log(this.salary);
        this.salary += 10;
    };

    constructor() {
        console.log('constructor');
        setTimeout(() => {
            console.log('settimeout');
            this.isDisabled = false;
        }, 3000);
    }
}



