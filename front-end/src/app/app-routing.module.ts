import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppModule } from './app.module';
import { IdentidadeVisualComponent } from './identidade-visual/identidade-visual.component';


const routes: Routes = [
  {path: '', component: AppModule},
  {path: 'identidade-visual', component: IdentidadeVisualComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {

}


