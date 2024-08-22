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
  
  onSearchInput(event: any) {
    const query = event.detail.value;
    console.log('Arama sorgusu:', query);
    if (event.inputType === 'insertText' && event.data === null) {
      // Enter tuşuna basıldığında
      console.log('Arama sorgusu:', query);
      // Burada, query'yi kullanarak arama işlemini gerçekleştirebilirsiniz.
      this.performSearch(query);
    }
  }

  performSearch(query: string) {
    // Arama işlemini burada gerçekleştirin
    console.log('Arama yapılıyor:', query);
  }
}
