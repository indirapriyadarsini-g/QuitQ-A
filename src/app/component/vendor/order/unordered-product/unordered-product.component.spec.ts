import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnorderedProductComponent } from './unordered-product.component';

describe('UnorderedProductComponent', () => {
  let component: UnorderedProductComponent;
  let fixture: ComponentFixture<UnorderedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnorderedProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnorderedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
