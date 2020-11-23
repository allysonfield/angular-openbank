import { Component } from '@angular/core';
import { RoutesService } from 'src/app/providers/routes.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {
  public sidebarColor = 'red';

  constructor(private api: RoutesService) {}

  changeSidebarColor(color) {
    const sidebar = document.getElementsByClassName('sidebar')[0];
    const mainPanel = document.getElementsByClassName('main-panel')[0];

    this.sidebarColor = color;

    if (sidebar !== undefined) {
      sidebar.setAttribute('data', color);
    }
    if (mainPanel !== undefined) {
      mainPanel.setAttribute('data', color);
    }
  }

  changeDashboardColor(color) {
    const body = document.getElementsByTagName('body')[0];
    if (body && color === 'white-content') {
      body.classList.add(color);
    } else if (body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }
  // ngOnInit() {
  //   this.api.ListAmount({user_id: '5fb6c0600b3b5b3a901c5033'}).subscribe(
  //     resp => {
  //       console.log('resposta', resp)
  //     }
  //   )
  // }
}
