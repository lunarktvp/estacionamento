import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo } from '../modelos/veiculoModel';

@Injectable({
  providedIn: 'root'
})

export class VeiculoService {

    veiculoUrl = 'http://localhost:8080/Veiculo';
  
    httpOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
}