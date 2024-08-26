import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { TabsHeaderComponent } from './tabs-header/tabs-header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { SliderOptionComponent } from './slider/slider-option/slider-option.component';

@NgModule({
  declarations: [TabsHeaderComponent, SliderComponent, SliderOptionComponent],
  imports: [CommonModule, IonicModule, FormsModule, RouterModule, ReactiveFormsModule, MaskitoDirective],
  exports: [ReactiveFormsModule, MaskitoDirective, TabsHeaderComponent, SliderComponent, SliderOptionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
