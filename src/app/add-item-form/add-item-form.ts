import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BudgetItem } from '../../shared/models/budget-item.model';
import { BudgetItemList } from '../budget-item-list/budget-item-list';

@Component({
  selector: 'app-add-item-form',
  imports: [FormsModule],
  templateUrl: './add-item-form.html',
  styleUrl: './add-item-form.scss'
})
export class AddItemForm {
  @Input() item: BudgetItem = new BudgetItem('', 0);
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
