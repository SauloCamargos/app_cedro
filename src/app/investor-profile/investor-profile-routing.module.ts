import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InvestorProfileComponent } from "./investor-profile.component"
import { SetProfileComponent } from './set-profile/set-profile.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: InvestorProfileComponent, children: [
        {
          path: '',
          redirectTo: 'create',
          pathMatch: 'full'
        },
        { path: 'create', component: SetProfileComponent }
        ]
      },
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class InvestorProfileRoutingModule { }