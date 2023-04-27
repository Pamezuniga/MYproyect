import { Component } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public personas:any[]=[]
  constructor(private servicio: DatosService){}
  ngOnInit(){
    this.servicio.getDatos()
    .subscribe((data:any)=>{
      this.personas=data;
      console.log(this.personas)
  })
 }

}
