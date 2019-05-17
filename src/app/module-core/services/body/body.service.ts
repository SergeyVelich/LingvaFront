import { Routes, Route } from '@angular/router';
import { BodyComponent } from '../../components/body/body.component';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/module-shared/services/base.service';

@Injectable({
  providedIn: 'root'
})

/**
 * Provides helper methods to create routes.
 */
export class Body extends BaseService {

  /**
   * Creates routes using the body component and authentication.
   * @param routes The routes to add.
   * @return {Route} The new route using body as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: BodyComponent,
      children: routes,
      // =canActivate: [AuthenticationGuard],
      // Reuse BodyComponent instance when navigating between child views
      data: { reuse: true }
    };
  }
}
