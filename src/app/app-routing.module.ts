import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './modules/user/pages/new-user/new-user.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'stock',
    loadChildren: () => import ('./modules/stock/stock.module').then((m) => m.StockModule),
  },
 
  {path: 'hola' , component: NewUserComponent},
  
  {
    path: 'user',
    loadChildren: () => import ('./modules/user/user.module').then((m) => m.UserModule),
  },

  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },

  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
