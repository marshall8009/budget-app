import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetItemList } from './budget-item-list';

describe('BudgetItemList', () => {
  let component: BudgetItemList;
  let fixture: ComponentFixture<BudgetItemList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetItemList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetItemList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
