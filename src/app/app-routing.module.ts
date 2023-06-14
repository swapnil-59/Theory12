import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PInfoComponent } from './p-info/p-info.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PDetailsComponent } from './p-details/p-details.component';
import { EDetailsComponent } from './e-details/e-details.component';
import { AddressComponent } from './address/address.component';
import { NoneComponent } from './none/none.component';

const routes: Routes = [
{path:"home",component:HomeComponent},
{path:"login",component:LoginComponent},
{path:"p-info",component:PInfoComponent,children:[
  {path:"p-details",component:PDetailsComponent},
  {path:"e-details",component:EDetailsComponent},
  {path:"address",component:AddressComponent}

]
},
{path:"contact-us",component:ContactusComponent},
{path:"",redirectTo:"/home",pathMatch:"full"},
{path:"**",component:NoneComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
