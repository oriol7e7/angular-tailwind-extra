import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.component.css',
  templateUrl: './hero.component.html',
})
export class Hero {
  public handleClick() {
    window.open('https://fortnite.com', '_blank');
  }
}
