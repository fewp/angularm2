import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cidade } from './cidade';


@Injectable()
export class CidadeService {
    baseUrl: string = 'https://knop-api.herokuapp.com/cidades';
   
    constructor(private http: HttpClient) { } 
    

      list() {
        return this.http.get<Cidade[]>(this.baseUrl);
      }

    
      getById(id: number) {
        return this.http.get<Cidade>(this.baseUrl + '/' + id);
      }
    
      createOrUpdate(cidade: Cidade) {
          if (cidade.id != null){
             return this.http.put(this.baseUrl, cidade);
          }
          else{
             return this.http.post(this.baseUrl, cidade);
          }
      }
    
      
    
      delete(id: number) {
        return this.http.delete(this.baseUrl + '/' + id);
      }
    }