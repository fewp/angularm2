import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
        {
            label: 'Home', icon: 'pi pi-fw pi-times',  routerLink: ['/']
            
        },
        {
            label: 'Consultas',
            icon: 'pi pi-fw pi-file',
            items: [
               
                {
                    label: 'Estados', 
                    icon: 'pi pi-fw pi-plus',
                    items: [
                       
                        {label: 'Estados primeng',  routerLink: ['/estados_primeng']},   
                        {label: 'Estados css',  routerLink: ['/estados']},   
                    ]
                },
                {
                    label: 'Cidades', 
                    icon: 'pi pi-fw pi-plus',
                    items: [
                       
                        {label: 'Cidades primeng', routerLink: ['/cidades_primeng']},   
                        {label: 'Cidade css', routerLink: ['/cidades']},
                    ]
                }
               
            ]
        }
    ];
}
}