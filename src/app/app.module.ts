import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {InputTextModule} from "primeng/inputtext";
import {BrowserModule} from "@angular/platform-browser";
import {MenuModule} from "primeng/menu";
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import {RouteguardService} from './Services/routeguard.service';
import {RouteguardAgentService} from './Services/routeguard-agent.service';
import {RouteguardCoursierService} from './Services/routeguard-coursier.service';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    InputTextModule,
    MenuModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UserLayoutComponent,


  ],
  providers: [RouteguardService,RouteguardAgentService,RouteguardCoursierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
