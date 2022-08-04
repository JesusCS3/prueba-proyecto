import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SinginComponent } from './components/singin/singin.component';
import { SingupComponent } from './components/singup/singup.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'landing-page'},
  {path:'footer', component:FooterComponent},
  {path:'header', component:HeaderComponent},
  {path:'home-page', component:HomePageComponent},
  {path:'landing-page', component:LandingPageComponent},
  {path:'singin', component:SinginComponent},
  {path:'singup', component:SingupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
