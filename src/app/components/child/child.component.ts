import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  childData = 'Monu';

  @Input()
  parentDataInChild = '';

  @Output()
  sendToParent = '';

  sendDataToParent = () => {
    console.log();
  };

}
