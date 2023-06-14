import { NgModule } from '@angular/core';
import { RouterModule, Routes, withHashLocation, Route } from '@angular/router';
import { ObserRoute } from './route/obser-routing.modules';
import { routes } from './route/route-routing.modules';
import { projectRoute } from './route/project-routing.modules';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
