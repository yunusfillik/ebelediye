import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, { Swiper } from 'swiper';

// Import Swiper modules
SwiperCore.use([]);
@Component({
  selector: 'app-slider-beta',
  templateUrl: './slider-beta.component.html',
  styleUrls: ['./slider-beta.component.scss'],
})
export class SliderBetaComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  currentIndex = 0;
  onSlideChange(event: any) {
    const swiper: Swiper = event.swiper; // Event'ten Swiper'ı alın

    this.currentIndex = swiper.activeIndex;
    const slides = document.querySelectorAll('.swiper-slide');

    slides.forEach((slide, index) => {
      if (index <= this.currentIndex) {
        slide.setAttribute('style', `margin-left: ${16 * index}px !important`);
      } else {
        slide.setAttribute('style', 'margin-left: 0');
      }
    });
  }

  goToStoresPage(){
    this.router.navigate(['/stores']);
  }



}
