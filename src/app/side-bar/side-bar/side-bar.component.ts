import { Component ,ChangeDetectionStrategy} from '@angular/core';
import {NbMenuItem, NbSidebarService} from '@nebular/theme';

@Component({
  selector: 'app-side-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  constructor(private sidebarService: NbSidebarService) {
    this.sidebarService.toggle(true, 'left');
  }
  public toggle() {
    this.sidebarService.toggle(false, 'left');
  }
  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/home'
    },
    {
      title: 'Add new ',
      icon: 'person-outline',
      link: '/add-new'
    },

  ];

}
