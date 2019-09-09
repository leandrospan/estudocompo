import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'pagina01', loadChildren: './pagina01/pagina01.module#Pagina01PageModule' },
  { path: 'pagina02', loadChildren: './pagina02/pagina02.module#Pagina02PageModule' },
  { path: 'pagina03', loadChildren: './pagina03/pagina03.module#Pagina03PageModule' },
  { path: 'pagina04', loadChildren: './pagina04/pagina04.module#Pagina04PageModule' },
  { path: 'pagina05', loadChildren: './pagina05/pagina05.module#Pagina05PageModule' },
  { path: 'editar-produto', loadChildren: './editar-produto/editar-produto.module#EditarProdutoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
