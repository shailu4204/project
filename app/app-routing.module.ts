import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { PaymentComponent } from './payment/payment.component';
import { SeatpageComponent } from './seatpage/seatpage.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'search',component:SearchComponent},
  {path:'cancel', component:CancellationComponent},
  {path:'payment', component:PaymentComponent},
  {path:'seatpage', component:SeatpageComponent},
  {path:'loginuser', component:LoginuserComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
