import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeOrderComponent } from './exchange-order.component';

describe('ExchangeOrderComponent', () => {
  let component: ExchangeOrderComponent;
  let fixture: ComponentFixture<ExchangeOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangeOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
