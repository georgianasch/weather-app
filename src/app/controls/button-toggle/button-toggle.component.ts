import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
})
export class ButtonToggleComponent {
  @Input() options: ButtonToggleOption[] = [];
  @Input() multiple: boolean = false;
  @Input() selectedValue: any;
  @Output() toggle = new EventEmitter<any>();

  constructor() {}
}

export interface ButtonToggleOption {
  value: string;
  label: string;
}
