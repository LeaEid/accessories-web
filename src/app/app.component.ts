import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'accessories-web';

  constructor(private router: Router){}

  openPage(page) {
    this.router.navigate([page]);
  }
}
