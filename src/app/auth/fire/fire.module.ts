import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FireRoutingModule } from './fire-routing.module';
import { FireComponent } from './fire.component';


@NgModule({
  declarations: [FireComponent],
  imports: [
    CommonModule,
    FireRoutingModule
  ]
})
export class FireModule { }
