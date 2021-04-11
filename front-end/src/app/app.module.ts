import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgLoadingSpinnerModule, NgLoadingSpinnerInterceptor } from 'ng-loading-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { BodyComponent } from './template/body/body.component';
import { SignOutComponent } from './component/sign-out/sign-out.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SobreComponent } from './component/sobre/sobre.component';
import { PageNotFoundComponent } from './template/page-not-found/page-not-found.component';
import { SearchCongregadoComponent } from './component/congregado/search-congregado/search-congregado.component';
import { EditCongregadoComponent } from './congregado/edit-congregado/edit-congregado/edit-congregado.component';

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
    HomeComponent,
    BodyComponent,
    SignOutComponent,
    DashboardComponent,
    SobreComponent,
    PageNotFoundComponent,
    SearchCongregadoComponent,
    EditCongregadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgLoadingSpinnerModule,
    FormsModule
  ],
  providers: [authInterceptorProviders,{ provide: HTTP_INTERCEPTORS, useClass: NgLoadingSpinnerInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
