import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './Pages/home/home.module#HomePageModule' },
  { path: 'features', loadChildren: './Pages/features/features.module#FeaturesPageModule' },
  { path: 'attendee', loadChildren: './Pages/attendee/attendee.module#AttendeePageModule' },
  { path: 'eventorg', loadChildren: './Pages/eventorg/eventorg.module#EventorgPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
