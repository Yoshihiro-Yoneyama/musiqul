import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TopPageComponent} from "./top-page/top-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'musiqul';
}
