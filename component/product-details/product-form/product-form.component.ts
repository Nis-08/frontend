import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { NgForm } from '@angular/forms';
import { Product } from '../../shared/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
constructor(public proService:ProductService){}
ngOnInit() {
  
}
submit(form:NgForm){
if(this.proService.productData.productId==0)
this.insertProduct(form);
else 
this.updateProduct(form);

}
insertProduct(myform:NgForm){
this.proService.saveproduct().subscribe(d=>{
this.resetForm(myform);
this.refreshData();
console.log('Save Success');
});
}
updateProduct(myform:NgForm){
  this.proService.updateproduct().subscribe(d=>{
    this.resetForm(myform);
    this.refreshData();
    console.log('Update Success');
    });
}
resetForm(myform:NgForm){
myform.form.reset();
this.proService.productData=new Product();
}
refreshData(){
  this.proService.getproduct().subscribe(res=>{
    this.proService.listproduct=res;
    });
}
}
