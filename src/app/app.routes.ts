import { Routes } from '@angular/router';
import {TopPageComponent} from "./top-page/top-page.component";
import {SecondPageComponent} from "./second-page/second-page.component";

export const routes: Routes = [
  {
    path: 'top',
    component: TopPageComponent
  },
  {
    path: 'second',
    component: SecondPageComponent
  }
];
