import { Component, Inject } from '@angular/core';
import { BudgetItem } from '../../shared/models/budget-item.model';
import { AddItemForm } from "../add-item-form/add-item-form";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-item-modal',
  imports: [AddItemForm],
  templateUrl: './edit-item-modal.html',
  styleUrl: './edit-item-modal.scss'
})

export class EditItemModal {
  constructor(
    public dialogRef: MatDialogRef<EditItemModal>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem
  ) { }

  onSubmitted(updatedItem: BudgetItem) {
    this.dialogRef.close(updatedItem);
  }
}
