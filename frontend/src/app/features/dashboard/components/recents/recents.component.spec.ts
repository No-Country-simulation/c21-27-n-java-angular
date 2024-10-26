import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentsComponent } from './recents.component';

describe('RecentsComponent', () => {
  let component: RecentsComponent;
  let fixture: ComponentFixture<RecentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
