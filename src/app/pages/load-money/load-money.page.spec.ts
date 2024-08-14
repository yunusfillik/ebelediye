import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadMoneyPage } from './load-money.page';

describe('LoadMoneyPage', () => {
  let component: LoadMoneyPage;
  let fixture: ComponentFixture<LoadMoneyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadMoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
