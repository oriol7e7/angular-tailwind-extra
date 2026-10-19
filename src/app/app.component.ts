import { Component, signal } from '@angular/core';
import { Header } from './header/header.component';
import { Hero } from './hero/hero.component';
import { Information } from './information/information.component';

@Component({
  imports: [Header, Hero, Information],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('tailwind-test');
}
