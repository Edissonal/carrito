import { Component, AfterContentInit, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-cards',
  templateUrl: './main-cards.component.html',
  styleUrl: './main-cards.component.scss'
})
export class MainCardsComponent implements  AfterContentInit,OnInit {

  search: FormGroup = this.fb.group(
    {
      dato: [null, []],
      precios: [null, []],
      categorias: [null, []],
    }
  );
  datalist:any=[];
  precios:string[]=[];
  categorias:string[]=[];
  keys: string[] = [];
  statusform!: boolean;


  constructor(
    private products:ProductosService,
    private fb:FormBuilder,
    private changeDetector: ChangeDetectorRef,
    private router:Router
  ){

  }

  ngOnInit(): void {
    this.onchanges();
  }

 

  ngAfterContentInit(): void {
   this.datalist = this.lisdata;
   this.listPrice();
  }

    /*validaciones de detecsion de cambios*/
    ngAfterContentChecked() {
      this.changeDetector.detectChanges();
    }

  get lisdata(){
    return this.products.targetas;
  }

  searchata(){
   console.log(this.search.value);
   
   if (this.search.invalid) {
    this.search.markAllAsTouched();
    return;
  }
 // this.search.reset();

  let {dato} = this.search.value;
  console.log(dato);

  let resultados = this.lisdata.filter(targeta => { return targeta.descripcion.includes(dato) || targeta.title.includes(dato) ||  targeta.area.includes(dato) ||  targeta.precio.includes(dato)});
  this.datalist = resultados;

}

  onchanges(){
  
    this.search.valueChanges.subscribe(res =>{
      let{dato,precios} = this.search.value;
      console.log(dato,precios);
      if(dato == ''){
        this.datalist = this.lisdata;
      }
      else if(dato !== '' && precios == null){

    let resultados = this.lisdata.filter(targeta => { return targeta.descripcion.includes(dato) || targeta.title.includes(dato) ||  targeta.area.includes(dato) ||  targeta.precio.includes(dato)});
    this.datalist = resultados;
      }

      //TODO:deja los valores en nulo
      for (const key of Object.keys(this.search.value)) {
        let value = this.search.value[key];
        if (value === null || (typeof value === 'string' && value.length === 0)) {
          let patchObject: { [key: string]: any } = {};
          patchObject[key] = null;
          this.search.patchValue(patchObject, { emitEvent: false });
        }
      }


    })

  }

    //TODO: funcion para validacion de campos*/
    camposvalidos(campo: any) {

      this.keys = Object.keys(this.search.controls);
      this.statusform = this.keys.some((campo) => this.search.get(campo)!.value !== null);
  
      if (this.statusform == false) {
        this.search.controls[`${campo}`].setErrors({ incorrect: true });
      }
      return (this.search.controls[campo].errors && this.search.controls[campo].touched);
    }

  //TODO:filtrado de productos
  listPrice(){

    
 for (const  datai of this.lisdata) {
    this.precios.push(datai.precio);
 }

 for (const  datai of this.lisdata) {
  this.categorias.push(datai.area);

}



  }

//TODO:implementacion de filtros
datafilter(filtreproces:string){
 console.log(filtreproces);
 
  this.datalist.sort((a: { precio: string }, b: { precio: string }) => {
    const diffA = Math.abs(parseInt(a.precio) - parseInt(filtreproces));
    const diffB = Math.abs(parseInt(b.precio) - parseInt(filtreproces));
    
    if (diffA === diffB) {
        return parseInt(a.precio) - parseInt(b.precio); // Comparar precios directamente
    } else {
        return diffA - diffB; // Comparar diferencias absolutas
    }
});

 console.log(this.datalist);
  }

  //TODO:filtrado de contenido
  changeCategory(data:string){
    let resultados = this.lisdata.filter(targeta => { return  targeta.area.includes(data)});
    this.datalist = resultados;
  }

  //TODO:redireccion
  Redirect(id:string){
    this.router.navigate([`/card-detail/${id}`]);
  }

}
