import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { SearchBarComponent } from './search-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
