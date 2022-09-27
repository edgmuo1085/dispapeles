import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPagesComponent } from '../layout/pages/layout-pages/layout-pages.component';
import { CreatePersonComponent } from './pages/create-person/create-person.component';
import { ListPersonComponent } from './pages/list-person/list-person.component';

const routes: Routes = [
  {
    path: '',

    component: LayoutPagesComponent,
    children: [
      {
        path: 'lista',
        component: ListPersonComponent,
      },
      {
        path: 'crear',
        component: CreatePersonComponent,
      },
      {
        path: 'modificar/:id',
        component: CreatePersonComponent,
      },
      {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonRoutingModule {}
