import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-detail',
  templateUrl: './banner-detail.page.html',
  styleUrls: ['./banner-detail.page.scss'],
})
export class BannerDetailPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closePage() {
    this.router.navigateByUrl('/tabs/home'); // Sayfayı kapat ve ana sayfaya dön
  }

  handleRefresh(event : any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

}
