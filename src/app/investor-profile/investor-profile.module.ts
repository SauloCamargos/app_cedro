import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestorProfileComponent } from './investor-profile.component';
import { InvestorProfileRoutingModule } from './investor-profile-routing.module';
import { SetProfileComponent } from './set-profile/set-profile.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InvestorProfileRoutingModule
  ],
  declarations: [InvestorProfileComponent, SetProfileComponent]
})
export class InvestorProfileModule { }
