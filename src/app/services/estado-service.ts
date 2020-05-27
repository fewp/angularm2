
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estado } from './estado';

@Injectable()
export class EstadoService {
    baseUrl: string = 'https://knop-api.herokuapp.com/estados';
   
    constructor(private http: HttpClient) { } 
    

      list() {
        return this.http.get<Estado[]>(this.baseUrl);
      }

    
      getById(id: number) {
        return this.http.get<Estado>(this.baseUrl + '/' + id);
      }
    
      createOrUpdate(estado: Estado) {
          if (estado.id != null){
             return this.http.put(this.baseUrl, estado);
          }
          else{
             return this.http.post(this.baseUrl, estado);
          }
      }
    
      
    
      delete(id: number) {
        return this.http.delete(this.baseUrl + '/' + id);
      }

      
    }