import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/services/estado';
import { EstadoService } from 'src/app/services/estado-service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {
    public estados: Estado[] = new Array();
  
  

  constructor(private estadosService: EstadoService) { }

  ngOnInit() {
      this.estadosService.list().subscribe(response => this.estados = response)
      
  }

}
