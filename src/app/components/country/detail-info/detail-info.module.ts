import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailInfoComponent } from './detail-info.component';

import { DetailInfoRoutingModule } from './detail-info-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DetailInfoComponent
  ],
  imports: [
    CommonModule,
    DetailInfoRoutingModule,
    SharedModule
  ]
})
export class DetailInfoModule { }
