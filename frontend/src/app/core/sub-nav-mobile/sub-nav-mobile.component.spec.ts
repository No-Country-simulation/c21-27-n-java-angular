import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNavMobileComponent } from './sub-nav-mobile.component';

describe('SubNavMobileComponent', () => {
  let component: SubNavMobileComponent;
  let fixture: ComponentFixture<SubNavMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubNavMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubNavMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
