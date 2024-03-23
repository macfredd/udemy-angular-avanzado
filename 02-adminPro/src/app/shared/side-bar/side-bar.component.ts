import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styles: ``
})
export class SideBarComponent {

  constructor(private sidebarService: SidebarService) { }

  get menu() {
    return this.sidebarService.getMenu();
  }
}
