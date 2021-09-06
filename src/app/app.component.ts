import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'holaMundo';
  owner = 'Jonatan Sandoval';
  visitante:string = '';
  nombrarVisitante(input: any):void {
    this.visitante = input.value;
  }
}
