import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  peliculas: any[] = [];
  generos = ['Musical', 'Drama', 'Acción', 'Terror', 'Comedia', 'Sci-Fi'];
  
  // NAVEGACIÓN (CORREGIDO: Ahora coincide con el HTML)
  vistaActual: 'carpetas' | 'listado' = 'carpetas';
  generoSeleccionado: string = ''; 

  nuevaPeli: any = { titulo: '', director: '', genero: '', calificacion: 0, imagen: '' };
  peliEditada: any = {};
  idEditando: number | null = null;
  apiUrl = 'http://localhost:3000/api/peliculas';

  constructor(private http: HttpClient) {}

  ngOnInit() { this.obtenerPeliculas(); }

  // AUTO-REFRESCO: Actualiza la BD al hacer click en cualquier parte
  @HostListener('document:click', ['$event'])
  onGlobalClick(event: MouseEvent) {
    if (this.idEditando === null) { this.obtenerPeliculas(); }
  }

  obtenerPeliculas() {
    this.http.get<any[]>(this.apiUrl).subscribe(res => this.peliculas = res);
  }

  // Filtrado de películas por el género seleccionado
  get peliculasFiltradas() {
    return this.peliculas.filter(p => p.genero === this.generoSeleccionado);
  }

  contarPeliculas(gen: string) {
    return this.peliculas.filter(p => p.genero === gen).length;
  }

  abrirGenero(gen: string) {
    this.generoSeleccionado = gen;
    this.vistaActual = 'listado';
  }

  volver() { this.vistaActual = 'carpetas'; }

  // MÉTODOS CRUD
  getStars(n: any) { return Array(parseInt(n) || 0).fill(0); }
  
  setRating(stars: number, modo: string) {
    if (modo === 'nueva') this.nuevaPeli.calificacion = stars;
    else this.peliEditada.calificacion = stars;
  }

  agregarPelicula() {
    if (!this.nuevaPeli.titulo) return;
    this.http.post(this.apiUrl, this.nuevaPeli).subscribe(() => {
      this.obtenerPeliculas();
      this.nuevaPeli = { titulo: '', director: '', genero: '', calificacion: 0, imagen: '' };
    });
  }

  iniciarEdicion(p: any) { this.idEditando = p.id; this.peliEditada = { ...p }; }
  cancelarEdicion() { this.idEditando = null; }
  
  guardarEdicion() {
    if (!this.idEditando) return;
    this.http.put(`${this.apiUrl}/${this.idEditando}`, this.peliEditada).subscribe(() => {
      this.idEditando = null;
      this.obtenerPeliculas();
    });
  }

  eliminarPelicula(id: number) {
    if (confirm('¿Eliminar?')) this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => this.obtenerPeliculas());
  }
}