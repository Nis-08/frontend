import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductFormComponent } from './component/product-details/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './component/header/header.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SignupComponent } from './component/signup/signup.component';
//import { LoginModelComponent } from './component/shared/login-model/login-model.component';



//import { ApiService } from './component/services/product.service';
//import { HomeComponent } from './component/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    SignupComponent,
    //HeaderComponent,
    HeaderComponent
    //LoginModelComponent

    
   // HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    SlickCarouselModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
