import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {

  titleCoche = 'Coche';

  constructor() { }

  ngOnInit(): void {
  }

  actualizaColor(value:string){
    console.log("Actualiza color = " + value);
  }

}
