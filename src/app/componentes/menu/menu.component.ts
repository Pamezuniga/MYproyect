import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  rutas=[
    {
      titulo:'Inicio',
      direccion:'/inicio'
    },
    {
      titulo:'Acerca',
      direccion:'/acerca'
    },
    {
      titulo:'Servicios',
      direccion:'/servis'
    },
    {
      titulo:'Contactenos',
      direccion:'/contacto'
    }
  ]

}
