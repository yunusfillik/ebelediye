import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, MaskitoDirective],
  exports: [ReactiveFormsModule, MaskitoDirective]
})
export class SharedModule {}
