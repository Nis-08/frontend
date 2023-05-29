import { HttpClient, HttpHeaders ,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, Product } from './product';
//import { promises } from 'dns';
import { Observable } from 'rxjs';

//const httpoptin =new HttpOption(new HttpHeaders)
@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  };
   
  constructor(private myhttp:HttpClient) { }
productUrl:string='https://localhost:44318/api/Product';
categoryUrl:string='https://localhost:44318/api/Category';
listproduct:Product[]=[];
listcategory:Category[]=[];
/*makeAuthenticatedRequest() {
  const token = 'your_token_here'; // Replace with your authentication token

  // Create headers with the authentication token
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  // Make the API request with the headers
  return this.http.get(`${this.}/endpoint`, { headers });
}*/

productData:Product=new Product();
saveproduct(){
return this.myhttp.post(this.productUrl, this.productData, this.httpOptions);
}
updateproduct(){
  return this.myhttp.put(`${this.productUrl}/${this.productData.productId}`, this.productData, this.httpOptions);
  }
getproduct():Observable<Product[]>{
return this.myhttp.get<Product[]>(this.productUrl);
}
getcategory():Observable<Category[]>{
  return this.myhttp.get<Category[]>(this.categoryUrl);
  }
deleteproduct(id:number){
  return this.myhttp.delete(`${this.productUrl}/${id}`);
}
}
