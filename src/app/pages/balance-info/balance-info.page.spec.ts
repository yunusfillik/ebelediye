import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalanceInfoPage } from './balance-info.page';

describe('BalanceInfoPage', () => {
  let component: BalanceInfoPage;
  let fixture: ComponentFixture<BalanceInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
