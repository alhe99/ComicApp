import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes:any[] = [];
  termino:any = '';

  constructor(
    private _activeRoute:ActivatedRoute,
    private _service:HeroesService
  ) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(param =>{
      this.termino = param.filter;
      this.heroes = this._service.buscarHeroes(this.termino);
    })
  }

}
