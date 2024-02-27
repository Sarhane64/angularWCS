import { Component } from '@angular/core';
import { Order } from '../interface/User.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  model: Order = new Order('', 0, new Date(), '');

  constructor() {}
  onSubmit(): void {
    console.log(this.model);
  }
}
