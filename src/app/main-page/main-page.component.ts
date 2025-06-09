import { Component } from '@angular/core';
import { AddItemForm } from '../add-item-form/add-item-form';

@Component({
  selector: 'app-main-page',
  imports: [AddItemForm],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPage {

}
