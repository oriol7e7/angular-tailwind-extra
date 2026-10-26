import { Component, signal } from '@angular/core';
import { Header } from './header/header.component';
import { Hero } from './hero/hero.component';
import { Information } from './information/information.component';
import { Footer } from './footer/footer.component';
import { Gamemodes } from './gamemodes/gamemodes.component';
import { Contact } from './contact/contact.component';

@Component({
  imports: [Header, Hero, Information, Footer, Gamemodes, Contact],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('tailwind-test');
}
