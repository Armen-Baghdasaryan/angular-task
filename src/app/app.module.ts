import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarItemComponent } from './components/car-item/car-item.component';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { SliderModalComponent } from './components/slider-modal/slider-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsPageComponent,
    CarItemComponent,
    SliderModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
