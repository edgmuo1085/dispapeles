import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from './components/layout/pages/layout-main/layout-main.component';
import { Page404Component } from './components/layout/pages/page404/page404.component';
import { AuthGuard } from './components/shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      {
        path: 'page',
        loadChildren: () => import(`./components/auth/auth.module`).then(m => m.AuthModule),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () => import(`./components/layout/layout.module`).then(m => m.LayoutModule),
        canActivate: [AuthGuard],
      },
      {
        path:'**',
        component: Page404Component
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
