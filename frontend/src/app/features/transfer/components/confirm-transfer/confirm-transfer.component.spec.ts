import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmTransferComponent } from './confirm-transfer.component';

describe('ConfirmTransferComponent', () => {
  let component: ConfirmTransferComponent;
  let fixture: ComponentFixture<ConfirmTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmTransferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
