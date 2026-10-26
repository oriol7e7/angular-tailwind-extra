import { Component, input } from '@angular/core';
import { GameMode } from '../../model/GameMode';

@Component({
  imports: [],
  selector: 'app-gamemode-card',
  styleUrl: './gamemode-card.component.css',
  templateUrl: './gamemode-card.component.html',
})
export class GamemodeCard {
  public mode = input.required<GameMode>();
}
