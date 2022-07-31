import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { GalaryComponent } from './galary/galary.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EntrypageComponent } from './entrypage/entrypage.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DatabindingprojComponent } from './databindingproj/databindingproj.component';
import { FormsModule } from '@angular/forms';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { SqrPipe } from './sqr.pipe';
import { CubePipe } from './cube.pipe';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    GalaryComponent,
    ContactUSComponent,
    LoginComponent,
    RegisterComponent,
    EntrypageComponent,
    DatabindingComponent,
    DatabindingprojComponent,
    PipedemoComponent,
    SqrPipe,
    CubePipe,
    AComponent,
    BComponent,
    CComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
