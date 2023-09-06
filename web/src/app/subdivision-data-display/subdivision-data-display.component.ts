import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';
@Component({
  selector: 'app-subdivision-data-display',
  templateUrl: './subdivision-data-display.component.html',
  styleUrls: ['./subdivision-data-display.component.css']
})
export class SubdivisionDataDisplayComponent implements OnInit {

  data: {} | undefined;

  constructor(private fetchService: FetchdataService) { }

  fetchData(): void {
    this.fetchService.getData().subscribe((data: any) => {
      this.data = JSON.stringify(data,null,2); 
      console.log('Got', this.data);
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }

}
