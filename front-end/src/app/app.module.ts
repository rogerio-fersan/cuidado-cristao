import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LogoComponent } from './template/logo/logo.component';
import { IdentidadeVisualComponent } from './identidade-visual/identidade-visual.component';
import { CookieAlertComponent } from './template/cookie-alert/cookie-alert.component';
import { AppRoutingModule } from './app-routing.module';
import { BarraNavegacaoComponent } from './template/barra-navegacao/barra-navegacao.component';
import { BarraRodapeComponent } from './template/barra-rodape/barra-rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    IdentidadeVisualComponent,
    CookieAlertComponent,
    BarraNavegacaoComponent,
    BarraRodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
