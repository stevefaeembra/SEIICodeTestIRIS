import { Component, OnInit, ViewChild } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSelectChange } from '@angular/material/select';
import { MatSort, Sort} from '@angular/material/sort';

@Component({
  selector: 'app-subdivision-data-display',
  templateUrl: './subdivision-data-display.component.html',
  styleUrls: ['./subdivision-data-display.component.css']
})
export class SubdivisionDataDisplayComponent implements OnInit {

  // data
  data: any;
  @ViewChild('paginator') paginator !: MatPaginator;
  dataSource = new MatTableDataSource;
  displayColumns = ['id','name','marketName','nearMapImageDate','subdivisionStatusCode'];

  // filtering 
  filterTypes = ['All','Active','Future','Builtout'];
  filterValue = 'All';
  
  // sorting
  @ViewChild('templateSort') dateSorter = new MatSort();

  constructor(private fetchService: FetchdataService) {
    this.fetchData();
   }

  fetchData(): void {
    this.fetchService.getData(1).subscribe((data: any) => {
      console.log('Received data', this.data);
      this.data = data.subdivisions;
      this.dataSource = new MatTableDataSource<any>(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.dateSorter;
    });
  }

  applyFilter(event: MatSelectChange) {
    const filterValue = event.value;
    if (filterValue === 'All') {
      this.dataSource.filter = '';
    } else {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.fetchData();
  }

}
