import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  public productList: any;

  

  constructor(private http:HttpClient ,  private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res => {
      this.productList = res;
     })
    // this.products = this.apiService.products
   
    }
    goToPage(edit:string): void {
    }
  
   
    
  
   
  }


