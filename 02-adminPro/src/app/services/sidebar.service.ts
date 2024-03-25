import { Injectable } from '@angular/core';

export interface SubMenuItem {
  title: string;
  url: string;
}
export interface MenuImtes {
  title: string;
  icon: string;
  submenu: SubMenuItem[];
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private menu: MenuImtes[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Progress Bar', url: 'progress' },
        { title: 'Promises', url: 'promises' },
        { title: 'Rxjs', url: 'rxjs' },
        { title: 'Gráficas', url: 'graficas' },
      ]
    }
  ];

  constructor() { }

  getMenu(): MenuImtes[] {
    return this.menu;
  }
}
