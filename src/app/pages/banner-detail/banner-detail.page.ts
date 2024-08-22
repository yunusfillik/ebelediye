import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-banner-detail',
  templateUrl: './banner-detail.page.html',
  styleUrls: ['./banner-detail.page.scss'],
})
export class BannerDetailPage implements OnInit {
  bannerId: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.bannerId = this.route.snapshot.paramMap.get('id');
    console.log(this.bannerId);
  }

  handleRefresh(event : any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

}
