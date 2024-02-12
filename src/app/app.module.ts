import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponatTestComponent } from './componat-test/componat-test.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ComponatTestComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
