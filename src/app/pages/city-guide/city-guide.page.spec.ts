import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityGuidePage } from './city-guide.page';

describe('CityGuidePage', () => {
  let component: CityGuidePage;
  let fixture: ComponentFixture<CityGuidePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CityGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
