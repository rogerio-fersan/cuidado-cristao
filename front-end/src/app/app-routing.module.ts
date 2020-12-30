import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentidadeVisualComponent } from './component/identidade-visual/identidade-visual.component';


const routes: Routes = [
  {path: 'identidade-visual', component: IdentidadeVisualComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {

}


