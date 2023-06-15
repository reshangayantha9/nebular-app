import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewComponent } from './add-new/add-new.component';



@NgModule({
  declarations: [
    AddNewComponent
  ],
  imports: [
    CommonModule
  ],exports:[AddNewComponent]
})
export class AddNewModule { }
