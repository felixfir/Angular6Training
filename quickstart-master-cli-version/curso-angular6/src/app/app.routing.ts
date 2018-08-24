import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import components
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
    {path: '', component: UserComponent}, /*Home Page*/
    {path: 'user', component: UserComponent}, 
    {path: '**', component: UserComponent} /*When something goes wrong*/
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);