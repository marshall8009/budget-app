import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-budget-item-card',
  imports: [CommonModule],
  templateUrl: './budget-item-card.html',
  styleUrl: './budget-item-card.scss'
})
export class BudgetItemCard {
  @Input() isIncome: boolean = true;

}
