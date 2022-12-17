import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorDescriptionComponent } from './author-description/author-description.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AuthorDescriptionComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [AuthorDescriptionComponent]
})
export class AuthorModule { }
