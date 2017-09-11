import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
//Angular Fire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// Component Imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//Service Imports
import { ClientService } from './services/client.service'
const appRoutes: Routes = [
  { path:'', component:DashboardComponent },
  { path:'register', component:RegisterComponent },
  { path:'login', component:LoginComponent },
  { path:'add-client', component:AddClientComponent },
  { path:'client/:id', component:ClientDetailsComponent },
  { path:'edit-client/:id', component:EditClientComponent}

];

export const firebaseConfig = {
  apiKey: "AIzaSyCztelh8AAwq6vt9OjfDIr4aiA3jh-xKXA",
  authDomain: "clientpanel-625fb.firebaseapp.com",
  databaseURL: "https://clientpanel-625fb.firebaseio.com",
  storageBucket: "clientpanel-625fb.appspot.com",
  messagingSenderId: "665024786793" 
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    FlashMessagesModule

  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
