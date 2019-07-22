import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadChildren: './Pages/home/home.module#HomePageModule' },
  { path: 'signuppage', loadChildren: './Pages/signuppage/signuppage.module#SignuppagePageModule' },

 
  { path: 'features', loadChildren: './Pages/features/features.module#FeaturesPageModule' },
  { path: 'menu', loadChildren: './Components/menu/menu.module#MenuPageModule' },
  { path: 'blank', loadChildren: './Pages/blank/blank.module#BlankPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
