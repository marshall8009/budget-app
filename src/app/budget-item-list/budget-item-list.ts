import { Component } from '@angular/core';
import { BudgetItemCard } from './budget-item-card/budget-item-card';

@Component({
  selector: 'app-budget-item-list',
  imports: [BudgetItemCard],
  templateUrl: './budget-item-list.html',
  styleUrl: './budget-item-list.scss'
})
export class BudgetItemList {

}
