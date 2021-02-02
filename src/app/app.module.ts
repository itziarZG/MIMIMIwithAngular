import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';
import { InputtextComponent } from './components/inputtext/inputtext.component';
import { MimimiPipe } from './pipes/mimimi.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    InputtextComponent,
    MimimiPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
