import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AggrementContentsPage } from './aggrement-contents.page';

describe('AggrementContentsPage', () => {
  let component: AggrementContentsPage;
  let fixture: ComponentFixture<AggrementContentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AggrementContentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
