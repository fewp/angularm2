import { Component, OnInit } from '@angular/core';
import { Tab_Cest } from 'src/app/services/tab_cest';
import { Tab_CestService } from 'src/app/services/tab_cest-service';

@Component({
  selector: 'app-cest',
  templateUrl: './cest.component.html',
  styleUrls: ['./cest.component.css']
})
export class CestComponent implements OnInit {
  tab_cests: Tab_Cest[] = new Array();

  constructor(private cestService: Tab_CestService) { }

  ngOnInit() {
    this.cestService.list().subscribe(response => this.tab_cests = response)
  }
}
