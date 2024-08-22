import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.page.html',
  styleUrls: ['./campaign-detail.page.scss'],
})
export class CampaignDetailPage implements OnInit {

  campaignId: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.campaignId = this.route.snapshot.paramMap.get('id');
    console.log(this.campaignId);
  }

}
