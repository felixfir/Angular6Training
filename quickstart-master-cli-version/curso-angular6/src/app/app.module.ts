import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { InsertComponent } from './insert/insert.component';

import { ConversorPipe } from './pipes/conversor.pipe';
import { ThemeComponent } from './themes/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    ThemeComponent,
    InsertComponent,
    ConversorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
