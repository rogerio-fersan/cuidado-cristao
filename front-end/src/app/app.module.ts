import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CookieAlertComponent } from './template/cookie-alert/cookie-alert.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { LogoComponent } from './template/logo/logo.component';
import { IdentidadeVisualComponent } from './component/identidade-visual/identidade-visual.component';
import { BarraNavegacaoComponent } from './template/barra-navegacao/barra-navegacao.component';
import { BarraRodapeComponent } from './template/barra-rodape/barra-rodape.component';
import { authInterceptorProviders } from '../app/helper/auth-interceptor';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { ProfileComponent } from './component/profile/profile.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    IdentidadeVisualComponent,
    CookieAlertComponent,
    BarraNavegacaoComponent,
    BarraRodapeComponent,
    SignUpComponent,
    SignInComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
