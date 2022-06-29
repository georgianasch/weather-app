import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { ButtonToggleComponent } from './button-toggle.component';

@NgModule({
  declarations: [ButtonToggleComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ButtonToggleComponent],
})
export class ButtonToggleModule {}
