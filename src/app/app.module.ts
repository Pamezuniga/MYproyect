import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { ServisComponent } from './pages/servis/servis.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcercaComponent,
    ContactoComponent,
    MenuComponent,
    ServisComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
