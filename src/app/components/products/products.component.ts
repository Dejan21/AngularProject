import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { HttpClient } from '@angular/common/http';
import { EditService } from 'src/app/service/edit.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  public productList: any;

  

  constructor(private http:HttpClient ,  private api: ApiService, private editService: EditService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res => {
      this.productList = res;
     })
    // this.products = this.apiService.products
   
    }
    goToPage(edit:string): void {
    }
  
    editCard(item:any){
      this.editService.editCard(item);
    }
   
    
  
   
  }


