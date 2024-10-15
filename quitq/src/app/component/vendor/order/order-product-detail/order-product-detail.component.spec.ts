import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProductDetailComponent } from './order-product-detail.component';

describe('OrderProductDetailComponent', () => {
  let component: OrderProductDetailComponent;
  let fixture: ComponentFixture<OrderProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderProductDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
