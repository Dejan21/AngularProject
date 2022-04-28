import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { HttpClient } from '@angular/common/http';
import { DetailService } from 'src/app/service/detail.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  public productList: any;

  

  constructor(private http:HttpClient ,  private api: ApiService, private detailService: DetailService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res => {
      this.productList = res;
     })
    // this.products = this.apiService.products
   
    }
    goToPage(_details:string): void {
    }
  
   details(item:any){
      this.detailService.details(item);
    }
   
    
  
   
  }


