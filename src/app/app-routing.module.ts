import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./page/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./page/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./page/editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'my-bids',
    loadChildren: () => import('./page/my-bids/my-bids.module').then( m => m.MyBidsPageModule)
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./page/order-detail/order-detail.module').then( m => m.OrderDetailPageModule)
  },
  {
    path: 'routes-rates',
    loadChildren: () => import('./page/routes-rates/routes-rates.module').then( m => m.RoutesRatesPageModule)
  },
  {
    path: 'booking-history',
    loadChildren: () => import('./page/booking-history/booking-history.module').then( m => m.BookingHistoryPageModule)
  },
  {
    path: 'add-routes',
    loadChildren: () => import('./page/add-routes/add-routes.module').then( m => m.AddRoutesPageModule)
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./page/vehicles/vehicles.module').then( m => m.VehiclesPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./page/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'new-load',
    loadChildren: () => import('./page/new-load/new-load.module').then( m => m.NewLoadPageModule)
  },
  {
    path: 'review-rating',
    loadChildren: () => import('./page/review-rating/review-rating.module').then( m => m.ReviewRatingPageModule)
  },
  {
    path: 'order-status',
    loadChildren: () => import('./page/order-status/order-status.module').then( m => m.OrderStatusPageModule)
  },
  {path: '**', redirectTo: 'home', pathMatch: 'full'},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
