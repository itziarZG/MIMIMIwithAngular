import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mimimiwithangular';
  public message: string = '';
  public updateMessage(value: any) {
    // console.log(event);
    this.message = value;
  }
}
