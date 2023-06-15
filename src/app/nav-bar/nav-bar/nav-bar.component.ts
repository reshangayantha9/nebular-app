import { Component } from '@angular/core';
import {SideBarComponent} from "../../side-bar/side-bar/side-bar.component";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  sidebar: SideBarComponent;
  constructor(s:SideBarComponent) {
      this.sidebar=s;
  }

}
