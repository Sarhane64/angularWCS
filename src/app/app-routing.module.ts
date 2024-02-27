import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component.js';
import { FooterComponent } from './footer/footer.component.js';
import { HomeComponent } from './home/home.component.js';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
