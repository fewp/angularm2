import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/services/estado';
import { EstadoService } from 'src/app/services/estado-service';

@Component({
  selector: 'app-estado-primeng',
  templateUrl: './estado-primeng.component.html',
  styleUrls: ['./estado-primeng.component.css']
})
export class EstadoPrimengComponent implements OnInit {
  estados: Estado[] = new Array();  
  constructor(private estadosService: EstadoService) { }
  ngOnInit() {
      this.estadosService.list().subscribe(response => this.estados = response)
  }
}
