import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetItem } from '../../../shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  imports: [CommonModule],
  templateUrl: './budget-item-card.html',
  styleUrl: './budget-item-card.scss'
})
export class BudgetItemCard {
  @Input() item: BudgetItem | undefined;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();
  // constructor(item: BudgetItem) {
  //   this.item = item;
  // }
  
  ngOnInit(){
    
  }

  onXButtonClick() {
    this.xButtonClick.emit();
  }

  onCardClick() {
    this.cardClick.emit();
  }
}
