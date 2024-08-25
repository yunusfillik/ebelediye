import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  banners = [
    {id: 1, img: 'assets/images/banner/anasayfa-banner-1.jpg'},
    {id: 2, img: 'assets/images/banner/anasayfa-banner-2.jpg'},
    {id: 3, img: 'assets/images/banner/anasayfa-banner-3.jpg'}
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleRefresh(event : any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

  goToStoresPage(){
    this.router.navigate(['/stores']);
  }

  goToCampaignsPage(){
    this.router.navigate(['/campaigns']);
  }

  goToCampaignDetail(id : any) : void {
    this.router.navigateByUrl('/campaign-detail/'+id);
  }

  goToStoreDetail(id : any) : void {
    this.router.navigateByUrl('/store-detail/'+id);
  }

  async onCityGuideClick() {
    try {
      this.router.navigate(['/city-guide']);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }

  onSliderClick(e: any){
    console.log(e)
  }

}
