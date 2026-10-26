import { Component, signal } from '@angular/core';
import { Header } from './header/header.component';
import { Hero } from './hero/hero.component';
import { Information } from './information/information.component';
import { Footer } from './footer/footer.component';

@Component({
  imports: [Header, Hero, Information, Footer],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('tailwind-test');
}
