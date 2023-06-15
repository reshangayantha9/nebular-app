import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbMenuModule,NbCardModule} from '@nebular/theme';
import { SideBarComponent } from './side-bar/side-bar.component';


import { RouterModule } from '@angular/router';
import {HomeComponent} from "../home/home/home.component";
import {AddNewComponent} from "../add-new/add-new/add-new.component";

@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule,
    NbMenuModule,
    NbCardModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'add-new', component: AddNewComponent },
    ])
  ],
  exports:[SideBarComponent]
})
export class SideBarModule { }
