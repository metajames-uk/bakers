import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutRoutingModule } from './about/about-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { RecipesRoutingModule } from './recipes/recipes-routing.module';
import { UserRoutingModule } from './user/user-routing.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./recipes/recipes.module').then((m) => m.RecipesModule),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    AboutRoutingModule,
    RecipesRoutingModule,
    UserRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
