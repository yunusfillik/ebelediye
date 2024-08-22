import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
})
export class StoresPage implements OnInit {
  searchActive = false;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  
  toggleSearch() {
    this.searchActive = !this.searchActive;
  }
  
  goToStoreDetail(id : any) : void {
    this.router.navigateByUrl('/store-detail/'+id); 
  }

  onSearchChange(event: any) {
    const query = event.detail.value.toLowerCase();
    // Arama sorgusunu kullanarak arama işlemini gerçekleştirin.
    console.log('Arama sorgusu:', query);
    // Burada, sorguyu kullanarak mağazalarınızı filtreleyebilirsiniz.
  }
}
