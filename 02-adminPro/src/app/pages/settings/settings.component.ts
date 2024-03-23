import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: ``
})
export class SettingsComponent implements OnInit{
  
  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }

  // Change the theme
  changeTheme(theme: string) {
    this.settingsService.changeTheme(theme);
  }
}
