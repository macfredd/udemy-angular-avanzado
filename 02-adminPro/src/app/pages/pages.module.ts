import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './graficas/grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { BaseChartDirective } from 'ng2-charts';
import { Grafica2Component } from './graficas/grafica2/grafica2.component';
import { GraphHomeComponent } from './graficas/home.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent,
    Grafica2Component,
    GraphHomeComponent,
    SettingsComponent
  ],
  exports: [
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ComponentsModule,
    BaseChartDirective,
  ]
})
export class PagesModule { }
