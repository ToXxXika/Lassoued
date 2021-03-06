import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {UserLayoutComponent} from './layouts/user-layout/user-layout.component';
import {RouteguardService} from './Services/routeguard.service';
import {RouteguardAgentService} from './Services/routeguard-agent.service';
import {RouteguardCoursierService} from './Services/routeguard-coursier.service';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
   // canActivate:[RouteguardService],
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'

      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  }, {
    path: '',
    component: UserLayoutComponent,
   // canActivate:[RouteguardAgentService],
    children: [
      {
        path: '',
        loadChildren: './layouts/user-layout/user-layout.module#UserLayoutModule'
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
