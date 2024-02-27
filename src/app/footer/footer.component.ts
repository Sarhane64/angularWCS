import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  model: any = {};

  onSubmit(): void {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
}
