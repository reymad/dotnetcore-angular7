import { Component } from '@angular/core';
import { Globals } from './appshared/appshared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ClientApp';
  color = Globals.color;

  ChangeColor(): void {
    this.color = Globals.randomColor();
  }

}
