import { Component } from '@angular/core';
import { NavigationList } from '../navigation-list/navigation-list.component';

@Component({
  imports: [NavigationList],
  selector: 'app-header',
  styleUrl: './header.component.css',
  templateUrl: './header.component.html',
})
export class Header {}
