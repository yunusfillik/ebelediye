import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import SwiperCore, { Swiper } from 'swiper';
import { Router } from '@angular/router';
register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }
  
  ngOnInit() {
  }

  handleRefresh(event : any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

  async onSlideClick(id: number) {
    try {
      // Servise request gönder
      //const data = await this.http.get(`your-api-endpoint/${id}`).toPromise();

      // Yeni sayfayı aç
      //this.router.navigate(['/my-page'], { state: { data } });
      this.router.navigate(['/banner-detail']);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }

  async onCityGuideClick() {
    try {
      this.router.navigate(['/city-guide']);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }

}
