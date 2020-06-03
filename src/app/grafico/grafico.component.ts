import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { Cidade } from 'src/app/services/cidade';
import { CidadeService } from 'src/app/services/cidade-service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  public cidades: Cidade[] = new Array();
  habitantes = [0,1,2,3,4,5,6,7,8,9];
  nomes = new Array();
  constructor(private cidadeService: CidadeService) { 
    this.cidadeService.list().subscribe(async (response) => {
      this.cidades = response;
      for (var i = 0; i < 10; i ++){
        this.nomes[i] = this.cidades[i].nome;
        this.habitantes[i] = this.cidades[i].populacao_2010;
      }
    })
  }




  async ngOnInit() {
    
  
    let chart = await new Chart("chart", {
      type: 'pie',
      data: {
        labels: this.nomes,
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ['rgba(223,0,49,0.1)', 'rgba(223,0,49,0.2)','rgba(223,0,49,0.3)','rgba(223,0,49,0.4)','rgba(223,0,49,0.5)','rgba(223,0,49,0.6)','rgba(223,0,49,0.7)','rgba(223,0,49,0.8)','rgba(223,0,49,0.9)','rgba(223,0,49,1)',],
          data: this.habitantes,
        }]
      },
      options: {
        title: {
          display: true,
          text: 'População em 2010'
        }
      }
    });
    
  }

}
