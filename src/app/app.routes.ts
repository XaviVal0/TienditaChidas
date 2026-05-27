import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/Products/Products';

export const routes: Routes = [
  {
    path: 'home',
    component : Home,
  },
  {
    path:"Products",
    component:Products
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
