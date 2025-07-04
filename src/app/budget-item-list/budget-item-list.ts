import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { BudgetItemCard } from './budget-item-card/budget-item-card';
import { BudgetItem } from '../../shared/models/budget-item.model';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModal } from '../edit-item-modal/edit-item-modal';

export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}

@Component({
  selector: 'app-budget-item-list',
  imports: [CommonModule, BudgetItemCard, NgFor],
  templateUrl: './budget-item-list.html',
  styleUrl: './budget-item-list.scss'
})

export class BudgetItemList {
  @Input() budgetItems: BudgetItem[] = [];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() updateBudget: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) {  }

  onDelete(item: BudgetItem) {
    this.delete.emit(item)
  }
  
  onCardClick(item: BudgetItem) {
    const dialogRef = this.dialog.open(EditItemModal,  {
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateBudget.emit({
          old: item,
          new: result
        });
      }
    })
  }
}
