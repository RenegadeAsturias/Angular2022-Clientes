import { Component } from '@angular/core';
import { Cliente } from './cliente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Clientes';

  tituloProvincias = 'Listado de Provincias';

  provincias:string[]=['Asturias','Barcelona','Burgos','Santander','Madrid'];

  tituloClientes = 'Listado de Clientes';

  clientes:Cliente[] = [
    new Cliente(1, 'Juan', 30),
    new Cliente(2, 'Eva', 32),
    new Cliente(3, 'Eduardo', 34),
    new Cliente(4, 'Rodolfo', 36)
  ];
  
}
