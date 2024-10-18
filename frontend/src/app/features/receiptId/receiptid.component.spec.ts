import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptidComponent } from './receiptid.component';

describe('ReceiptidComponent', () => {
  let component: ReceiptidComponent;
  let fixture: ComponentFixture<ReceiptidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
