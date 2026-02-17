import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Profile],
  styleUrl: './app.css',
  template: `
      <app-profile></app-profile>
    `
})
export class App {
  protected readonly title = signal('user-profile-app');
}
