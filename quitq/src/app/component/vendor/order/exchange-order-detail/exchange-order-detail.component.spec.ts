import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeOrderDetailComponent } from './exchange-order-detail.component';

describe('ExchangeOrderDetailComponent', () => {
  let component: ExchangeOrderDetailComponent;
  let fixture: ComponentFixture<ExchangeOrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangeOrderDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
