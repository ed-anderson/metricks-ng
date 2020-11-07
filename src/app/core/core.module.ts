import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TwitterLogoComponent } from './components/twitter-logo/twitter-logo.component';

@NgModule({
  declarations: [NavbarComponent, TwitterLogoComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent],
})
export class CoreModule {}
