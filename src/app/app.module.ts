
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EstadoComponent } from './views/estado/estado.component';
import { AppRoutes} from './app.routes';
import { CidadeComponent } from './views/cidade/cidade.component';
import { EstadoService } from './services/estado-service';
import { HttpClientModule } from '@angular/common/http';


//exigidos pelo primeng
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//primeng
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import {PanelModule} from 'primeng/panel';
import { HomeComponent } from './views/home/home.component';
import {ToolbarModule} from 'primeng/toolbar';
import { CidadeService } from './services/cidade-service';
import { TableModule } from 'primeng/table';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { EstadoPrimengComponent } from './views/estado-primeng/estado-primeng.component';
import { CidadePrimengComponent } from './views/cidade-primeng/cidade-primeng.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EstadoComponent,
    CidadeComponent,
    HomeComponent,
    EstadoPrimengComponent,
    CidadePrimengComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    AppRoutes,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToolbarModule,
    AccordionModule,
    PanelModule,
    TableModule,
    VirtualScrollerModule,
    MenuModule,
    MenubarModule
  ],

  providers: [EstadoService, CidadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
