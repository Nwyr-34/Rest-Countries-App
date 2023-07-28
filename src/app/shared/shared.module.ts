import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos
import { NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


//Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    NgOptimizedImage
  ]
})
export class SharedModule { }
