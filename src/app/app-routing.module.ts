import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'toc', loadChildren: './toc/toc.module#TocPageModule' },
  { path: 'bullseye', loadChildren: './bullseye/bullseye.module#BullseyePageModule' },
  { path: 'daredevil', loadChildren: './daredevil/daredevil.module#DaredevilPageModule' },
  { path: 'elektra', loadChildren: './elektra/elektra.module#ElektraPageModule' }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
