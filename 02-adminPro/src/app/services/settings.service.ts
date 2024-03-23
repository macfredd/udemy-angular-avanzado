import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');
  
  constructor() { 
    const themeUrl = localStorage.getItem('themeUrl') || './assets/css/colors/default.css';
    this.linkTheme?.setAttribute('href', themeUrl);
  }

  changeTheme(theme: string) {
    const themeUrl = `./assets/css/colors/${ theme }.css`;

    if (this.linkTheme === null) {
      const newLinkTheme = document.createElement('link');
      newLinkTheme.setAttribute('id', 'theme');
      newLinkTheme.setAttribute('rel', 'stylesheet');
      newLinkTheme.setAttribute('href', themeUrl);
      document.head.append(newLinkTheme);
    } else {
      this.linkTheme!.setAttribute('href', themeUrl);
    }
    localStorage.setItem('themeUrl', themeUrl);
    this.checkCurrentTheme();
  }

  // Check the current theme
  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');
    links?.forEach( elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.linkTheme?.getAttribute('href') || '';

      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working');
      }
    });
  }
}
