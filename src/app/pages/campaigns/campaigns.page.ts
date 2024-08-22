import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.page.html',
  styleUrls: ['./campaigns.page.scss'],
})
export class CampaignsPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  goToCampaignDetail(id : any) : void {
    this.router.navigateByUrl('/campaign-detail/'+id); 
  }
}
