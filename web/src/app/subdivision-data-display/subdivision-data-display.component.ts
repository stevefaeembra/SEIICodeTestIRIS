import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';
@Component({
  selector: 'app-subdivision-data-display',
  templateUrl: './subdivision-data-display.component.html',
  styleUrls: ['./subdivision-data-display.component.css']
})
export class SubdivisionDataDisplayComponent implements OnInit {

  data: [];

  constructor(private fetchService: FetchdataService) {
    this.data = [];
   }

  fetchData(): void {
    this.fetchService.getData(1).subscribe((data: any) => {
      this.data = data;
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }

}
