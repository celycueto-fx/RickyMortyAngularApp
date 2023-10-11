import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { episode } from 'src/app/models/ricky-morty';
import { ApiRickyMortyService } from 'src/app/services/api-ricky-morty.service';

@Component({
  selector: 'app-show-espisode',
  templateUrl: './show-espisode.component.html',
  styleUrls: ['./show-espisode.component.scss']
})
export class ShowEspisodeComponent {
  displayedColumns: string[] = ['name', 'episode'];
  dataSource!: MatTableDataSource<episode>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;




  constructor(private ApiRickyMortyService$: ApiRickyMortyService,private router: Router){

  }
  ngAfterViewInit(): void {
    this.ApiRickyMortyService$.getEpisodes().subscribe((res)=>{
      this.dataSource = new MatTableDataSource(res.results);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }


  showEpisodeDetail(id:number){
    this.router.navigate(['/episodeDetail'], { queryParams: {location: id} })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}
