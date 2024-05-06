import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';
import { Productos } from '../../models/productos.model';

@Component({
  selector: 'app-detail-shoping',
  templateUrl: './detail-shoping.component.html',
  styleUrl: './detail-shoping.component.scss'
})
export class DetailShopingComponent {


  detailProduct:Productos[]=[];
  detainfo!:Productos;
  data:boolean=false;


  constructor(
    private productos:ProductosService,
    private  activateroute: ActivatedRoute,
    private router:Router
  ){
    this.activateroute.params.subscribe((res:any) => {
      let id =res.id;
      console.log(id);
      this.detailProduct =  this.productos.detaildata();
      [this.detainfo] =  this.detailProduct.filter((item)=> item.id == id )
      console.log(this.detainfo);
   });

  }

  //TODO:implementacion de sdatos
  changeStatus(){
    this.data =true;
  }

  back(){
    this.router.navigate([`/main`]);
  }

}
