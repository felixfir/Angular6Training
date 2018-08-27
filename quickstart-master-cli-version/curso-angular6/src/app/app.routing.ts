import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import components
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent}, /*Home Page*/
    {path: 'home', component: HomeComponent}, /*Home Page*/
    {path: 'user', component: UserComponent}, 
    {path: '**', component: HomeComponent} /*When something goes wrong*/
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);