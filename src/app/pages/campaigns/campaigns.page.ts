import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.page.html',
  styleUrls: ['./campaigns.page.scss'],
})
export class CampaignsPage implements OnInit {
  searchActive = false;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  goToCampaignDetail(id : any) : void {
    this.router.navigateByUrl('/campaign-detail/'+id); 
  }

  toggleSearch() {
    this.searchActive = !this.searchActive;
  }
  

  onSearchChange(event: any) {
    const query = event.detail.value.toLowerCase();
    // Arama sorgusunu kullanarak arama işlemini gerçekleştirin.
    console.log('Arama sorgusu:', query);
    // Burada, sorguyu kullanarak mağazalarınızı filtreleyebilirsiniz.
  }
}
