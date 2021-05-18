import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Output() checkboxClick = new EventEmitter();
  @Input() isChecked = false;

  toggleCheckbox(event: any): void {
    this.checkboxClick.emit(event);
  }
}
