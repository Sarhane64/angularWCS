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
  text: string = 'Beer or not beer';
  //Data-Binding
  imageSrc: string = 'https://via.placeholder.com/350x150';
  //EventBinding
  sayHello(): void {
    alert('bonjour');
  }

  isThisIngredientVital: boolean = true;

  isGuestListDisplayed: boolean = true;

  userName: string = user.name;
  userFirstName: string = user.firstName;
  userAge: number = user.age;
  userQuote: string | null | undefined = user.quote;
  userPhoto: string = user.photo;

  //useEffect
  ngOnInit(): void {}

  songList: string[] = ['Alejandro', 'Ne me quitte pas', 'Le temps est bon'];
}
