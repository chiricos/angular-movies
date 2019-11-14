import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../servicio/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  movie:any;
  id:number;

  constructor( private _activatedRoute:ActivatedRoute, public peliculasServicio:PeliculasService) {
    this._activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    console.log(this.id);
    this.movie = this.peliculasServicio.getMovie(this.id);
  }

}
