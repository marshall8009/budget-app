import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { BudgetItemCard } from './budget-item-card/budget-item-card';
import { BudgetItem } from '../../shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-list',
  imports: [CommonModule, BudgetItemCard, NgFor],
  templateUrl: './budget-item-list.html',
  styleUrl: './budget-item-list.scss'
})
export class BudgetItemList {
  @Input() budgetItems: BudgetItem[] = [];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  onDelete(item: BudgetItem) {
    this.delete.emit(item)
  }
}
