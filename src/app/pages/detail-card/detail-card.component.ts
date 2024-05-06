import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Productos } from '../../models/productos.model';


@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrl: './detail-card.component.scss'
})
export class DetailCardComponent {

detailProduct:Productos[]=[];
detainfo!:Productos;
data:boolean=false;
constructor(
      private  activateroute: ActivatedRoute,
      private  products:ProductosService,
      private router:Router
  ){

    this.activateroute.params.subscribe((res:any) => {
       let id =res.id;
       console.log(id);
       this.detailProduct =  this.products.detaildata();
       [this.detainfo] =  this.detailProduct.filter((item)=> item.id == id )
       console.log(this.detainfo);

    });

  }

  //TODO:envia de datos a carrito
  sendata(data:number){
    this.router.navigate([`/card-shoping/${data}`]);
  }

  back(){
    this.router.navigate([`/main`]);
  }
}
