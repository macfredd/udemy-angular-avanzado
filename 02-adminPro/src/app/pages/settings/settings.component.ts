import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: ``
})
export class SettingsComponent implements OnInit{
  
  // these lines avoid hit the DOM multiple times
  public linkTheme?: Element | null = document.querySelector('#theme') ;
  public links?: NodeListOf<Element>;

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.checkCurrentTheme();
  }

  // Change the theme
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
    this.links?.forEach( elem => {
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
