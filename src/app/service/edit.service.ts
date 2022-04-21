import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  
  public editItemList : any = []
  public productList = new BehaviorSubject<any>([])
  getTotalDetails: any;



  constructor() { }

  getProducts(){
    return this.productList.asObservable()
  }

  setProduct(product:any) {
    this.editItemList.push(...product);
    this.editItemList.next(product);
  }

editCard(product : any) {
    this.editItemList.push(product);
    this.productList.next(this.editItemList);
   this.getTotalDetails();
   console.log(this.editItemList);
  }

}
 getTotalDetails() : number{
  let grandTotal = 0;
   this.editItemList.map((a:any) => {
    grandTotal +=a.total;
  })
  return grandTotal;
}

removeCardItem(){

}





