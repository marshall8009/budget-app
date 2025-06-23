import { Component } from '@angular/core';
import { AddItemForm } from '../add-item-form/add-item-form';
import { BudgetItemList } from '../budget-item-list/budget-item-list';
import { BudgetItem } from '../../shared/models/budget-item.model';

@Component({
  selector: 'app-main-page',
  imports: [AddItemForm, BudgetItemList],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPage {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
  }
}
