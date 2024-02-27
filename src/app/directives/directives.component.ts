import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  isAdamin: boolean = true;

  toggle() {
    this.isAdamin = !this.isAdamin;
  }
}
