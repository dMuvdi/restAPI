import { Component, OnInit } from '@angular/core';
import { StoreServiceService } from 'src/app/store-service.service';


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  public storeArray:any = []

  constructor(public storeService: StoreServiceService) { }


  ngOnInit(): void {
    this.loadData()
  }

  public loadData(){
    this.storeService.getStores('http://localhost:5000/store')
    .subscribe(response => {
      this.storeArray = Object.values(response);
      console.log(Object.values(response));
    })
  }
}
