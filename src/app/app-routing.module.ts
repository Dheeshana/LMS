import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LetterManagerComponent } from './pages/letter-manager/letter-manager.component';

const routes: Routes = [
  {path: 'letterManager', component: LetterManagerComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routningComponents = [LetterManagerComponent, DashboardComponent]
