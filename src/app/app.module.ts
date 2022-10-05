import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './models/about/about.component';

import { RouterModule } from '@angular/router';
import { StoresComponent } from './models/stores/stores.component';
import { NavbarComponent } from './models/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http'
import { StoreServiceService } from './store-service.service';
import { AddStoreComponent } from './models/add-store/add-store.component';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    StoresComponent,
    NavbarComponent,
    AddStoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component:StoresComponent},
      {path:'about', component:AboutComponent},
      {path: 'addStore', component:AddStoreComponent},
      {path:'**', redirectTo:'', pathMatch:'full'}
    ])
  ],
  providers: [StoreServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
