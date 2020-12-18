import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { IdentidadeVisualComponent } from './identidade-visual/identidade-visual.component';
import { CookieAlertComponent } from './cookie-alert/cookie-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    IdentidadeVisualComponent,
    CookieAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
