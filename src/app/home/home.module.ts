import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalculatorModule } from '../calculator/calculator.module';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CalculatorModule, CommonModule, HomeRoutingModule],
})
export class HomeModule {}
