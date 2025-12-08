import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Productos } from './productos/productos';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'productos', component: Productos },
];
