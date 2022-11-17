import { ListHauseComponent } from './Views/Hause/list-hause/list-hause.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list-hauses', pathMatch: 'full' },
  { path: 'list-hauses', component: ListHauseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
