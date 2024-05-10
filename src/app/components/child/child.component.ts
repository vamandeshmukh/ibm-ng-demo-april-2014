import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  sendToParent = new EventEmitter<string>();

  sendDataToParent = () => {
    console.log();
    this.sendToParent.emit(this.childData);
  };

}