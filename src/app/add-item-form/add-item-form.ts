import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BudgetItem } from '../../shared/models/budget-item.model';
import { BudgetItemList } from '../budget-item-list/budget-item-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-item-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-item-form.html',
  styleUrl: './add-item-form.scss'
})
export class AddItemForm {
  @Input() item: BudgetItem | undefined;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem: boolean = false;

  ngOnInit() {
    if (this.item) {
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BudgetItem('', 0);
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
