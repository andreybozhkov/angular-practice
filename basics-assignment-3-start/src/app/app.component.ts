import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayParagraph: boolean = true;
  clickLog: string[] = [];

  toggleDisplay(): void {
    this.clickLog.push(new Date().toString());
    this.displayParagraph = !this.displayParagraph;
  }
}
