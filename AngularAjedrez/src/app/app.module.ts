import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidebarDerechaComponent } from './sidebar-derecha/sidebar-derecha.component';
import { SidebarIzquierdaComponent } from './sidebar-izquierda/sidebar-izquierda.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidebarDerechaComponent,
    SidebarIzquierdaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
