import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  
  public detailItemList : any = []
  public productList = new BehaviorSubject<any>([])
  getTotalDetails: any;



  constructor() { }

  getProducts(){
    return this.productList.asObservable()
  }

  setProduct(product:any) {
    this.detailItemList.push(...product);
    this.detailItemList.next(product);
  }

 details(product : any) {
    this.detailItemList.push(product);
    this.productList.next(this.detailItemList);
   this.getTotalDetails();
   console.log(this.detailItemList);
  }

}
//  getTotalDetails(): number{
//   let grandTotal = 0;
//    this.detailItemList.map((a:any) => {
//     grandTotal +=a.total;
//   })
//   return grandTotal;
// }

// removeCardItem(){

// }





