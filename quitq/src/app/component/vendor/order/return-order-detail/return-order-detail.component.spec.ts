import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOrderDetailComponent } from './return-order-detail.component';

describe('ReturnOrderDetailComponent', () => {
  let component: ReturnOrderDetailComponent;
  let fixture: ComponentFixture<ReturnOrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnOrderDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
