import { ListHauseComponent } from './Views/Hause/list-hause/list-hause.component';
import { UpdateHauseComponent } from './Views/Hause/update-hause/update-hause.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list-hauses', pathMatch: 'full' },
  { path: 'list-hauses', component: ListHauseComponent },
  { path: 'update-hause/:id', component: UpdateHauseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
