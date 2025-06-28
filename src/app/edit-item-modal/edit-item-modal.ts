import { Component, Input } from '@angular/core';
import { BudgetItem } from '../../shared/models/budget-item.model';
import { AddItemForm } from "../add-item-form/add-item-form";

@Component({
  selector: 'app-edit-item-modal',
  imports: [AddItemForm],
  templateUrl: './edit-item-modal.html',
  styleUrl: './edit-item-modal.scss'
})

export class EditItemModal {
  @Input() item: BudgetItem = new BudgetItem('', 0);

  onSubmitted(updatedItem: BudgetItem) {

  }
}
