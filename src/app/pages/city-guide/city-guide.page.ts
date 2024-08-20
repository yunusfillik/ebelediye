import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-guide',
  templateUrl: './city-guide.page.html',
  styleUrls: ['./city-guide.page.scss'],
})
export class CityGuidePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closePage() {
    this.router.navigateByUrl('/home'); // Sayfayı kapat ve ana sayfaya dön
  }

  handleRefresh(event : any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }


}
