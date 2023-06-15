import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NbLayoutModule, NbButtonModule,NbUserModule } from '@nebular/theme';

@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbLayoutModule,
    NbButtonModule,
    NbUserModule
  ],
  exports:[NavBarComponent]
})
export class NavBarModule { }
