import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteStrings } from './route-strings';

const routes: Routes = [
  {
    path: RouteStrings.root,
    loadChildren: () =>
      import('../app/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: RouteStrings.references,
    loadChildren: () =>
      import('../app/references/references.module').then(
        (m) => m.ReferencesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
