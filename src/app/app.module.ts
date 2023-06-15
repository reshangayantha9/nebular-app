import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NbThemeModule,NbLayoutModule,NbSidebarModule,NbSidebarService,NbMenuModule} from '@nebular/theme';
import { NbIconModule } from '@nebular/theme';
import {NavBarModule} from "./nav-bar/nav-bar.module";
import {SideBarModule} from "./side-bar/side-bar.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SideBarComponent} from "./side-bar/side-bar/side-bar.component";
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {HomeModule} from "./home/home.module";
import {RouterOutlet} from "@angular/router";
import {AddNewModule} from "./add-new/add-new.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NbIconModule,
    NbLayoutModule,
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    NbSidebarModule,
    NavBarModule,
    BrowserAnimationsModule,
    SideBarModule,
    NbEvaIconsModule,
    RouterOutlet,
    HomeModule,
    AddNewModule
  ],
  providers: [NbSidebarService,
    {provide: SideBarComponent, useClass: SideBarComponent }],
  bootstrap: [AppComponent]
})
export class AppModule { }
