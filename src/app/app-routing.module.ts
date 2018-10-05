import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InitialComponent } from './initial/initial.component';
import { ConfirmSubscribeComponent } from './confirm-subscribe/confirm-subscribe.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
    //   { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: InitialComponent },
      { path: 'investor-profile', loadChildren: './investor-profile/investor-profile.module#InvestorProfileModule' },
      { path: 'confirm-subscribe', component: ConfirmSubscribeComponent }
    //   { path: 'auth/login', component: LoginComponent }
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }