import { Component } from '@angular/core';
import { CARDS } from '../data/cards';
import { GameMode } from '../model/GameMode';
import { GamemodeCard } from './gamemode-card/gamemode-card.component';

@Component({
  imports: [GamemodeCard],
  selector: 'app-gamemodes',
  styleUrl: './gamemodes.component.css',
  templateUrl: './gamemodes.component.html',
})
export class Gamemodes {
  public gamemodes: GameMode[] = CARDS;
}
