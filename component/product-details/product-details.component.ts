import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Category, Product } from '../shared/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  listproduct:ProductService[];
constructor(public proService:ProductService){}
ngOnInit(){
     this.proService.getproduct().subscribe(data=>{
      this.proService.listproduct=data;
     });
}
populateProduct(selectedProduct:Product){
  console.log(selectedProduct);
this.proService.productData=selectedProduct;
}
delete(productId:number){
if(confirm('Do you really want to delete this record?')){
  this.proService.deleteproduct(productId).subscribe(data=> {
    console.log('Record deleted...');
    this.proService.getproduct().subscribe(data=>{
      this.proService.listproduct=data;
     });
  },
  err=>{
console.log('Record not deleted...');
  });
}
}
}
