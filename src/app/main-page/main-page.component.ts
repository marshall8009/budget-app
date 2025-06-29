import { Component } from '@angular/core';
import { AddItemForm } from '../add-item-form/add-item-form';
import { BudgetItemList, UpdateEvent } from '../budget-item-list/budget-item-list';
import { BudgetItem } from '../../shared/models/budget-item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  imports: [AddItemForm, BudgetItemList, CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPage {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }

  updateItem(updateEvent: UpdateEvent) {
    // replace item with updated item
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;
    
    //update totalBudget
    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }
}
