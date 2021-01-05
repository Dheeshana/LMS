import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import {PagesModule} from '../../pages/pages.module';



@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    PagesModule
  ],
  exports: [
    DefaultComponent
  ]
})
export class DefaultModule { }