import { Routes} from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculaComponent } from './pelicula/pelicula.component';

export const APP_ROUTES:Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'pelicula/:id', component: PeliculaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];