import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetItemCard } from './budget-item-card';

describe('BudgetItemCard', () => {
  let component: BudgetItemCard;
  let fixture: ComponentFixture<BudgetItemCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetItemCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetItemCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
