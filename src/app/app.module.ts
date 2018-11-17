import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {HotelService} from './hotel.service';
import { AppRoutingModule ,routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalityquizComponent } from './hospitalityquiz/hospitalityquiz.component';
import { AirlinesquizComponent } from './airlinesquiz/airlinesquiz.component';
import { FormsModule  } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
