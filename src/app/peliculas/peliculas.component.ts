import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../servicio/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  constructor(private router:Router, public peliculasServicio:PeliculasService) { }

  ngOnInit() {
  }

  start = 0;
  end = 9;

  getMovies() {
    return this.peliculasServicio.getMovies();
  }

  getPages() {
    let pages = [];
    for(let i = 1; i <= Math.ceil(this.peliculasServicio.getMovies().length / 9); i++){
      pages.push(i);
    }
    return pages;
  }

  selectPage(page) {
    this.start = (page*9);
    this.end = 9 + (page*9);
  }
  
  detalles(idx){
    this.router.navigate(['/pelicula',(idx+this.start)]);
  }

}
