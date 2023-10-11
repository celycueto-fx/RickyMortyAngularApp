import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiRickyMortyService } from 'src/app/services/api-ricky-morty.service';

@Component({
  selector: 'app-show-place',
  templateUrl: './show-place.component.html',
  styleUrls: ['./show-place.component.scss']
})
export class ShowPlaceComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'type'];
  dataSource!: MatTableDataSource<Location>;
  clickedRows = new Set<Location>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor(private ApiRickyMortyService$: ApiRickyMortyService,private router: Router){

  }
  ngAfterViewInit(): void {
    this.ApiRickyMortyService$.getPlaces().subscribe((res)=>{
      this.dataSource = new MatTableDataSource(res.results);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }


  showLocation(id:number){
    this.router.navigate(['/placeDetail'], { queryParams: {location: id} })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
