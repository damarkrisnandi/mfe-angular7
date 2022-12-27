import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { MainPageComponent } from './features/main-page/main-page.component';
import { Page1Component } from './features/page1/page1.component';

const routes: Routes = [
  {
    path: 'my-app',
    component: MainPageComponent
  },
  {
    path: 'my-app/page1',
    component: Page1Component
  },
  {
  path: '**',
  component: EmptyRouteComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  exports: [RouterModule]
})
export class AppRoutingModule { }
