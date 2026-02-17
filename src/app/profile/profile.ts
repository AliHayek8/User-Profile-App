import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {

 name: string = 'Ali';
 age: number = 22;

 ngOnInit(){
   console.log('Profile Component Loaded')
   }

  changeName(){
    this.name = 'Ahmad';

    }
}
