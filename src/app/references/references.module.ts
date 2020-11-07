import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DoiLinkComponent } from './components/doi-link/doi-link.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { ReferencesComponent } from './components/references/references.component';
import { DoiLinkPipe } from './pipes/doi-link/doi-link.pipe';
import { ReferencesRoutingModule } from './references-routing.module';
import { ReferenceService } from './services/reference/reference.service';

@NgModule({
  declarations: [
    DoiLinkComponent,
    DoiLinkPipe,
    ReferencesComponent,
    ReferenceComponent,
  ],
  imports: [CommonModule, ReferencesRoutingModule],
  providers: [ReferenceService],
})
export class ReferencesModule {}
