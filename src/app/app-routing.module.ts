import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NilaiComponent } from './nilai/nilai.component';
import { ProfilComponent } from './profil/profil.component';
import { RaportComponent } from './raport/raport.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'raport',
    component: RaportComponent,
  },
  {
    path: 'nilai',
    component: NilaiComponent,
  },
  {
    path: 'forgotpw',
    component: ForgotpwComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'profil',
    component: ProfilComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
