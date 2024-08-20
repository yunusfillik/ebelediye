import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerDetailPage } from './banner-detail.page';

describe('BannerDetailPage', () => {
  let component: BannerDetailPage;
  let fixture: ComponentFixture<BannerDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
