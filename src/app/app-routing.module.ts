import { NgModule } from '@angular/core';
import { RouterModule, Routes, withHashLocation } from '@angular/router';
import { ObserRoute } from './route/obser-routing.modules';
import { routes } from './route/route-routing.modules';
import { projectRoute } from './route/project-routing.modules';

@NgModule({
  imports: [RouterModule.forRoot(projectRoute)],
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
