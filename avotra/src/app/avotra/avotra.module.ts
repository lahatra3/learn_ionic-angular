import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './components/body/body.component';
import { CalculatriceComponent } from './components/calculatrice/calculatrice.component';
import { PrieresComponent } from './components/prieres/prieres.component';
import { AvotraRoutingModule } from './avotra-routing.module';



@NgModule({
  declarations: [
    BodyComponent,
    CalculatriceComponent,
    PrieresComponent
  ],
  imports: [
    CommonModule,
    AvotraRoutingModule
  ],
  exports: [
    BodyComponent,
    CalculatriceComponent,
    PrieresComponent
  ]
})
export class AvotraModule { }
