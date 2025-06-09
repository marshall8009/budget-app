import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPage } from "./main-page/main-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Budget App';
}