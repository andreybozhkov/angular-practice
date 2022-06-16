import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { LogListComponent } from './logList/logList.component';

@NgModule({
  declarations: [
    AppComponent,
    ParagraphComponent,
    LogListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
