import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http:HttpClient) { }

  getDatos()
  {
    return this.http.get("http://localhost/datos/personas");
  }

  getServicios()
  {
    return this.http.get("http://localhost/datos/servicios");
  }
  
}
