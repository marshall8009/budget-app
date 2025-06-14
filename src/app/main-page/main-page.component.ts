import { Component } from '@angular/core';
import { AddItemForm } from '../add-item-form/add-item-form';
import { BudgetItemList } from '../budget-item-list/budget-item-list';

@Component({
  selector: 'app-main-page',
  imports: [AddItemForm, BudgetItemList],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPage {

}
