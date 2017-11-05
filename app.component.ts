import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: 'assets/images/thumb1.png' },
      { name: 'assets/images/thumb2.png' },
      { name: 'assets/images/thumb3.png' },
      { name: 'assets/images/thumb4.png' },
      { name: 'assets/images/thumb1.png' },
      { name: 'assets/images/thumb2.png' },
      { name: 'assets/images/thumb3.png' },
      { name: 'assets/images/thumb4.png' },
    ];
  }
}
