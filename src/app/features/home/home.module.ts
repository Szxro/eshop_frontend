import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderLayoutComponent } from './components/header-layout/header-layout.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderLayoutComponent,
    HomeFooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
