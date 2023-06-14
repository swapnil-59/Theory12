import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PInfoComponent } from './p-info/p-info.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PDetailsComponent } from './p-details/p-details.component';
import { EDetailsComponent } from './e-details/e-details.component';
import { AddressComponent } from './address/address.component';
import { NoneComponent } from './none/none.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PInfoComponent,
    ContactusComponent,
    PDetailsComponent,
    EDetailsComponent,
    AddressComponent,
    NoneComponent,
    TemplateFormComponent,
    ReactiveFormsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
