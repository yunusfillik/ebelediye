import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-balance-info',
  templateUrl: './balance-info.page.html',
  styleUrls: ['./balance-info.page.scss'],
})
export class BalanceInfoPage implements OnInit {
  balance = 255;
  cardNumber = '1234 5678 **** ****';
  cardHolderName = 'Mustafa Dağlılar';

  constructor(private router : Router) { }

  ngOnInit() {
  }

  closePage() {
    this.router.navigateByUrl('/my-profile'); 
  }

  handleRefresh(event : any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

}
