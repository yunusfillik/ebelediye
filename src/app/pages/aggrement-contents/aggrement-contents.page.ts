import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

export type AggrementTypes = 'KVKKClarification' | 'MembershipAggrement' | 'PrivacyPolicy';
export const PageTitles = {
  KVKKClarification: 'Aydınlatma Metni',
  MembershipAggrement: 'Üyelik Sözleşmesi',
  PrivacyPolicy: 'Gizlilik Politikası'
}

@Component({
  selector: 'app-aggrement-contents',
  templateUrl: './aggrement-contents.page.html',
  styleUrls: ['./aggrement-contents.page.scss'],
})
export class AggrementContentsPage implements OnInit {

  @Input() type: AggrementTypes;

  title: string = '';
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.title = PageTitles[this.type];
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
