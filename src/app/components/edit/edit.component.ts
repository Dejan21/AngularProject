import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/service/edit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public products: any = [];
  public grandTotal !: number;
  constructor(private editService: EditService) { }

  ngOnInit(): void {
    this.editService.getProducts()
    .subscribe((res:any)=>{
       this.products = res;
       this.grandTotal = this.editService.getTotalDetails();
    })
  }

}
