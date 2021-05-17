import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitSessionComponent } from './init-session/init-session.component';

const routes: Routes = [
  {
    path:'',
    component: InitSessionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
