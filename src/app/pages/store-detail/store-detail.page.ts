import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.page.html',
  styleUrls: ['./store-detail.page.scss'],
})
export class StoreDetailPage implements OnInit {

  storeId: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.storeId = this.route.snapshot.paramMap.get('id');
    console.log(this.storeId); // Store ID'yi konsola yazdırabilirsiniz.
  }

}
