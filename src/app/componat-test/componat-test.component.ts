import { Component, OnInit } from '@angular/core';
import user from '../user-profile.js';

@Component({
  selector: 'app-componat-test',
  templateUrl: './componat-test.component.html',
  styleUrl: './componat-test.component.css',
})
export class ComponatTestComponent implements OnInit {
  //variable
  name: string = 'Jean-Mathieu';
  //Data-Binding
  imageSrc: string = 'https://via.placeholder.com/350x150';
  //EventBinding
  sayHello(): void {
    alert('bonjour');
  }
  userName: string = user.name;
  userFirstName: string = user.firstName;
  userAge: number = user.age;
  userQuote: string | null | undefined = user.quote;
  userPhoto: string = user.photo;

  //useEffect
  ngOnInit(): void {}
}
