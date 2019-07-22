import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './Pages/home/home.module#HomePageModule' },

  { path: 'features', loadChildren: './Pages/features/features.module#FeaturesPageModule' },
  { path: 'event-page', loadChildren: './Pages/event-page/event-page.module#EventPagePageModule' },
  { path: 'image', loadChildren: './Pages/image/image.module#ImagePageModule' },

  { path: 'login', loadChildren: './Pages/login/login.module#LoginPageModule' },
  { path: 'features', loadChildren: './Pages/features/features.module#FeaturesPageModule' },
  { path: 'userhome', loadChildren: './Pages/userhome/userhome.module#UserhomePageModule' },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
