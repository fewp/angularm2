/* https://kestoqueapi.herokuapp.com/tabs_cest */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tab_Cest } from './tab_cest';

@Injectable()
export class Tab_CestService {
    baseUrl: string = 'https://kestoque-api.herokuapp.com/tabs_cest';

    constructor(private http: HttpClient) { } 

    list() {
        return this.http.get<Tab_Cest[]>(this.baseUrl);
    }
}