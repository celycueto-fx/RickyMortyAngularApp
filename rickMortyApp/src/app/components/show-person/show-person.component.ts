import { ApiRickyMortyService } from './../../services/api-ricky-morty.service';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { RickyMorty } from 'src/app/models/ricky-morty';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-show-person',
  templateUrl: './show-person.component.html',
  styleUrls: ['./show-person.component.scss'],

})
export class ShowPersonComponent implements AfterViewInit,OnInit {

  displayedColumns: string[] = ['image','name', 'status', ];
  dataSource!: MatTableDataSource<RickyMorty>;
  clickedRows = new Set<RickyMorty>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  //filters
  public searchForm!: FormGroup;
  public status = '';
  public species = '';
  public type = '';
  public gender= '';

  constructor(private ApiRickyMortyService$: ApiRickyMortyService,private router: Router) {

  }
  ngOnInit(): void {
    this.searchFormInit();

  }

  ngAfterViewInit() {

  this.getCharacter();
  }

  getCharacter(){
    this.ApiRickyMortyService$.getCaracter().subscribe((res)=>{
      this.dataSource = new MatTableDataSource(res.results);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  searchFormInit() {
    this.searchForm = new FormGroup({

      status: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      species: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      type: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      gender: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),


    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();


    this.ApiRickyMortyService$.getCaracterByName(filterValue).subscribe((res)=>{

      this.dataSource = new MatTableDataSource(res.results);
      this.dataSource.paginator=this.paginator

    },
   )

   if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }

  }

  showCharacter(id:Number){
    this.router.navigate(['/characterDetail'], { queryParams: { character: id} })
  }

  applyFilter2() {
    const status = this.searchForm.get('status')?.value;
    const specie = this.searchForm.get('species')?.value;
    const type= this.searchForm.get('type')?.value;
    const gender = this.searchForm.get('gender')?.value;


    if(status|| specie|| type|| gender){

      this.ApiRickyMortyService$.getCaracterFilter(status,specie,type,gender).subscribe((res)=>{
        this.dataSource = new MatTableDataSource(res.results);
        this.dataSource.paginator=this.paginator

        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      })

    }

  }

  clearInput(){

    this.searchForm.controls['status'].setValue("");;
    this.searchForm.controls['species'].setValue("")
    this.searchForm.controls['type'].setValue("")
    this.searchForm.controls['gender'].setValue("")
    this.getCharacter();
  }

  back(){
    this.router.navigate(['']);
  }
}





