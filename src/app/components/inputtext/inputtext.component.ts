import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.scss'],
})
export class InputtextComponent {
  @Input() public value: string = '';
  @Output() public actionClicked = new EventEmitter();

  public handleClick() {
    console.log(this.value);
    this.actionClicked.emit(this.value);
    this.value = '';
  }
}
