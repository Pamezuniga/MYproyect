import { Component } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-servis',
  templateUrl: './servis.component.html',
  styleUrls: ['./servis.component.css']
})
export class ServisComponent {
  public services:any[]=[]
  constructor(private servicio: DatosService){}
  
  ngOnInit(){
    this.servicio.getDatos()
    .subscribe((data:any)=>{
      this.services=data;
      console.log(this.services)
  })
 }
}
