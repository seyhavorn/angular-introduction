import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { projectRoute } from './route/project-routing.modules';

@NgModule({
  imports: [
    RouterModule.forRoot(projectRoute, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
