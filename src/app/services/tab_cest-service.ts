/* https://kestoqueapi.herokuapp.com/tabs_cest */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tab_Cest } from './tab_cest';

@Injectable()
export class Tab_CestService {
    baseUrl: string = 'https://kestoqueapi.herokuapp.com/tabs_cest';
   
    constructor(private http: HttpClient) { } 

    list() {
        return this.http.get<Tab_Cest[]>(this.baseUrl);
    }
    
    getById(id: number) {
        return this.http.get<Tab_Cest>(this.baseUrl + '/' + id);
    }
    
    createOrUpdate(tab_cest: Tab_Cest) {
        if (tab_cest.id != null){
            return this.http.put(this.baseUrl, tab_cest);
        } else {
            return this.http.post(this.baseUrl, tab_cest);
        }
    }
    delete(id: number) {
        return this.http.delete(this.baseUrl + '/' + id);
    }
}