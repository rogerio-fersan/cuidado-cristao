import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { IdentidadeVisualComponent } from './component/identidade-visual/identidade-visual.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignOutComponent } from './component/sign-out/sign-out.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SobreComponent } from './component/sobre/sobre.component';
import { PageNotFoundComponent } from './template/page-not-found/page-not-found.component';
import { SearchCongregadoComponent } from './component/congregado/search-congregado/search-congregado.component';
import { EditCongregadoComponent } from './congregado/edit-congregado/edit-congregado/edit-congregado.component';


const routes: Routes = [
  { path: 'identidade-visual', component: IdentidadeVisualComponent},
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-out', component: SignOutComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'pageNotFound', component: PageNotFoundComponent },
  { path: 'searchCongregado', component: SearchCongregadoComponent },
  { path: 'editCongregado/:id', component: EditCongregadoComponent },

  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {

}


