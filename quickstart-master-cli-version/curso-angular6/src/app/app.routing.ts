import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import components
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { InsertComponent } from './insert/insert.component';
import { ThemeComponent } from './themes/theme.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent}, /*Home Page*/
    {path: 'theme', component: ThemeComponent},
    {path: 'home', component: HomeComponent}, /*Home Page*/
    {path: 'user', component: UserComponent}, 
    {path: 'user/:parameter', component: UserComponent}, 
    {path: 'insert', component: InsertComponent},
    {path: '**', component: HomeComponent} /*When something goes wrong*/
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);