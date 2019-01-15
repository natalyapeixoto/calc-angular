import { NgModule } from "@angular/core";

import { CalcComponent } from "./calc/calc.component";


@NgModule({
  declarations: [ CalcComponent], 
  exports: [ CalcComponent]
})

export class CalcModule {}