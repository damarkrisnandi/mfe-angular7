import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

import { LazyPageRoutingModule } from './lazy-page-routing.module';
import { LazyPageComponent } from './lazy-page.component';

@NgModule({
  declarations: [
    LazyPageComponent
  ],
  imports: [
    CommonModule,
    LazyPageRoutingModule
  ],
  entryComponents: [
    LazyPageComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class LazyPageModule { }
