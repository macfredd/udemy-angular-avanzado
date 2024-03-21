import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: ``
})
export class PagesComponent implements OnInit {
  ngOnInit(): void {
    const linkTheme = document.querySelector('#theme');
    const themeUrl = localStorage.getItem('themeUrl') || './assets/css/colors/default.css';
    linkTheme?.setAttribute('href', themeUrl);
  }

}
