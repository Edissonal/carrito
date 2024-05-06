import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
 public targetas=[
    {"id":1,
     "imagen":'assets/fotos/blanco.jpg',
     "descripcion":"consola xbox series s",
     "title":"XBOX",
     "area":"tecnologia",
     "precio":"2000"
    },
    {"id":2,
     "imagen":'assets/fotos/ultima.jpg',
     "descripcion":"consola xbox series x",
     "title":"XBOX",
     "area":"Video juegos",
     "precio":"4000"
    },
    {"id":3,
    "imagen":'assets/fotos/negro.png',
    "descripcion":"consola xbox series 360",
    "title":"XBOX",
    "area":"mini consolas",
    "precio":"5000"
  },
    {
      "id":4,
     "imagen":'assets/fotos/tele.jpg',
     "descripcion":"muy economico",
     "title":"televisor hd",
     "area":"televisores",
     "precio":"6000"
    },
    { "id":5,
      "imagen":'assets/fotos/sonido.webp'
     ,"descripcion":"equipos de sonido",
     "title":"equipo",
     "area":"sonido",
     "precio":"7000"
    },
    { "id":6,
    "imagen":'assets/fotos/celu.jpg'
   ,"descripcion":"celular",
   "title":"muy economico",
   "area":"moviles",
   "precio":"7000"
  }
  ];


  public detailcards=[
    {  
      "id":1,
      "title":"Consola Xbox Series S Standard 512gb Color Blanco",
      "price":'$1.739.900',
      "descripcion":"nintendo switch oled 64gb",
      "capacity":"Capacidad",
      "area":"computadores",
      "color":"Blanco",
      "resolution":"2560px x 1440",
      "memoria":" 10GB",
      "cantidad":"50",
      "images":"assets/fotos/blanco.jpg" 
    },
    {
      "id":2,
      "title":"consola xbox series X",
      "price":'$4.739.900',
      "descripcion":"Consola Xbox Series X",
      "capacity":"10 Gb",
      "area":"Consolas",
      "color":"negra",
      "resolution":"2560px x 1440",
      "memoria":" 700GB",
      "cantidad":"50",
      "images":"assets/fotos/ultima.jpg" 
    },
    {
      "id":3,
      "title":"Xbox 360",
      "price":'$3.739.900',
      "descripcion":"xbox 360",
      "capacity":"10 Gb",
      "area":"Consolas",
      "color":"negra",
      "resolution":"2560px x 1440",
      "memoria":" 500GB",
      "cantidad":"100",
      "images":"assets/fotos/negro.png" 
    },
    {
      "id":4,
      "title":"televisor",
      "price":'$3.739.900',
      "descripcion":"televisor",
      "capacity":"1TB",
      "area":"Consolas",
      "color":"negra",
      "resolution":"2560px x 1440",
      "memoria":" 400GB",
      "cantidad":"50",
      "images":"assets/fotos/tele.jpg" 
    }
    ,
    {
      "id":5,
      "title":"equipos",
      "price":'$3.739.900',
      "descripcion":"televisor",
      "capacity":"1TB",
      "area":"Consolas",
      "color":"negra",
      "resolution":"2560px x 1440",
      "memoria":" 400GB",
      "cantidad":"50",
      "images":"assets/fotos/sonido.webp" 
    },
    {
      "id":6,
      "title":"equipos",
      "price":'$3.739.900',
      "descripcion":"televisor",
      "capacity":"1TB",
      "area":"Consolas",
      "color":"negra",
      "resolution":"2560px x 1440",
      "memoria":" 400GB",
      "cantidad":"50",
      "images":"assets/fotos/celu.jpg" 
    }
  ];


  constructor(private http:HttpClient) {}

  detaildata(){
    
    return this.detailcards;
  }

}
