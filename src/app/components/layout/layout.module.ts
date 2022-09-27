import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutAuthComponent } from './pages/layout-auth/layout-auth.component';
import { LayoutMainComponent } from './pages/layout-main/layout-main.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { Page404Component } from './pages/page404/page404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeCustomModule } from '../shared/prime-custom.module';
import { NavbarComponent } from './pages/layout-pages/components/navbar/navbar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LayoutAuthComponent,
    LayoutMainComponent,
    LayoutPagesComponent,
    Page404Component,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeCustomModule,
  ],
})
export class LayoutModule {}
