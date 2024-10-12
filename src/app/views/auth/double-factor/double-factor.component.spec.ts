import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule here


import { DoubleFactorComponent } from './double-factor.component';

describe('DoubleFactorComponent', () => {
  let component: DoubleFactorComponent;
  let fixture: ComponentFixture<DoubleFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoubleFactorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
