
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EstadoComponent } from './views/estado/estado.component';
import { AppRoutes} from './app.routes';
import { CidadeComponent } from './views/cidade/cidade.component';
import { EstadoService } from './services/estado-service';
import { Tab_CestService } from './services/tab_cest-service';
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
import {SidebarModule} from 'primeng/sidebar';
import { SidebarComponent } from './sidebar/sidebar.component';
import {ChartModule} from 'primeng/chart';
import { GraficoComponent } from './grafico/grafico.component';
import { BlocoComponent } from './bloco/bloco.component';
import { BlocoreverseComponent } from './blocoreverse/blocoreverse.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CadastroPessoas } from './views/cadastro-pessoas/cadastro-pessoas.component';
import { CestComponent } from './views/cest/cest.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EstadoComponent,
    CidadeComponent,
    HomeComponent,
    EstadoPrimengComponent,
    CidadePrimengComponent,
    SidebarComponent,
    GraficoComponent,
    BlocoComponent,
    BlocoreverseComponent,
    CadastroPessoas,
    CestComponent
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
    MenubarModule,
    SidebarModule,
    ChartModule,
    ScrollPanelModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
  ],

  providers: [EstadoService, CidadeService, Tab_CestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
