import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eduardorrportfolio';

  showFiller = false;

  tiles: Tile[] = [
    //{ cols: 4, rows: 1, color: 'red' },
    { cols: 3, rows: 1, color: 'lightblue' },
    { cols: 1, rows: 2, color: 'lightgreen' },
    { cols: 1, rows: 1, color: 'lightpink' },
    { cols: 2, rows: 1, color: '#DDBDF1' },
  ];
}