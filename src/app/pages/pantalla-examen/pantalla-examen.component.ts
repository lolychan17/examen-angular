import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { IDataPokemon } from 'src/app/interface/pokemon.interface';

@Component({
  selector: 'app-pantalla-examen',
  templateUrl: './pantalla-examen.component.html',
  styleUrls: ['./pantalla-examen.component.css'],
  providers: [MessageService]
})
export class PantallaExamenComponent implements OnInit {
  listPokemon: IDataPokemon[] = [];
  columnTabla: any;
  loading = false;
  constructor(private rutas: Router,
              private Poke: PokemonService,
              private mensajes: MessageService ){

  }

  ngOnInit(): void {
    this.iniColumnaTabla();
    console.log('Hola estoy aqui desde ngOninit');
    this.loading = true;
    this.listPokemon.getAllEmployee().subscribe(
      {
        next: (datos) => {
          console.log(datos);
          this.listPokemon = datos.results;
          this.loading = false;
          this.mensajes.add({ severity: 'success', summary: 'Satisfactorio', detail: 'Exito' });
        },
        error: (err) => {
          console.log(err);
          this.loading = false;
          this.mensajes.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema' });
        }
      }
    );      
  }

  iniColumnaTabla(){
    this.columnTabla = [
        {
          field: 'name', header: 'Nombre del Pokemon'
        },
        {
          field: 'url', header: 'Url'
        },

     ];
  }

  regresarInicio(){
    this.rutas.navigate(['inicio']);
  }

}