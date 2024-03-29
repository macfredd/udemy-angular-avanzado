import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './graficas/grafica1/grafica1.component';
import { Grafica2Component } from './graficas/grafica2/grafica2.component';
import { GraphHomeComponent } from './graficas/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
          { path: '', component: DashboardComponent },
          { path: 'progress', component: ProgressComponent },
          { path: 'graficas', component: GraphHomeComponent },
          { path: 'settings', component: SettingsComponent },
          { path: 'promises', component: PromisesComponent },
          { path: 'rxjs', component: RxjsComponent},
        ],
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
