import { Component, OnInit, ViewChild } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-subdivision-data-display',
  templateUrl: './subdivision-data-display.component.html',
  styleUrls: ['./subdivision-data-display.component.css']
})
export class SubdivisionDataDisplayComponent implements OnInit {

  data: any;
  @ViewChild('paginator') paginator !: MatPaginator;
  dataSource = new MatTableDataSource;
  filterTypes = ['ACTIVE','FUTURE','BUILT_OUT'];
  filterValue = 'ACTIVE';

  constructor(private fetchService: FetchdataService) {
    this.fetchData();
   }

  fetchData(): void {
    this.fetchService.getData(1).subscribe((data: any) => {
      console.log('Received data', this.data);
      this.data = data.subdivisions;
      this.dataSource = new MatTableDataSource<any>(this.data);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.fetchData();
  }

}
