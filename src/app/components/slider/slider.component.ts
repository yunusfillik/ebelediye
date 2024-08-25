import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  QueryList,
  ViewChild
} from '@angular/core';
import { SliderOptionComponent } from './slider-option/slider-option.component';
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';
register();

export interface AppSliderConfig {
  slidesPerView?: number,
  pagination?: boolean,
  freeMode?: boolean
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterContentInit {
  @Input() type: 'alpha' | 'beta' = 'alpha';
  @Input() header: string;
  @Input() sliderOptions: AppSliderConfig;
  @Output() allButtonClick = new EventEmitter<any>();
  @ViewChild('swiper', { static: false }) swiper!: Swiper;
  @ContentChildren(SliderOptionComponent) options!: QueryList<SliderOptionComponent>;

  @HostBinding('class.component-class')

  config: AppSliderConfig = {
    slidesPerView: 1,
    pagination: true,
    freeMode: false
  }

  constructor() {
  }

  ngAfterContentInit() {
    this.setConfig();
    this.swiper?.update();
  }

  handleAllButtonClick() {
    this.allButtonClick.emit();
  }

  setConfig() {
    switch (this.type) {
      case 'beta':
        const betaConfig: AppSliderConfig = {
          slidesPerView: this.sliderOptions?.slidesPerView ?? 1.015,
          pagination: true,
          freeMode: true
        }
        this.config = betaConfig;
        break;
    }
  }
}
