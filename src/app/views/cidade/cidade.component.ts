import { Component, OnInit } from '@angular/core';
import { Cidade } from 'src/app/services/cidade';
import { CidadeService } from 'src/app/services/cidade-service';



@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})


export class CidadeComponent implements OnInit {
  public cidades: Cidade[] = new Array();

  constructor(private cidadeService: CidadeService) { }

  ngOnInit() {
    this.cidadeService.list().subscribe(response => this.cidades = response)

  }

}
