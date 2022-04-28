import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/service/detail.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public products :any = [];
  public grandTotal !: number;

  constructor(private detailService: DetailService) { }

  
  ngOnInit(): void {
    this.detailService.getProducts()
    .subscribe((res:any)=>{
       this.products = res;
       this.grandTotal = this.detailService.getTotalDetails();
    })
  }
 
  

}
