import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from 'src/app/models/ricky-morty';
import { ApiRickyMortyService } from 'src/app/services/api-ricky-morty.service';

@Component({
  selector: 'app-show-place-detail',
  templateUrl: './show-place-detail.component.html',
  styleUrls: ['./show-place-detail.component.scss']
})
export class ShowPlaceDetailComponent {

  id="";
  urlImage=""
  dataLocation:Location[]=[];

  constructor(private serviceApi$:ApiRickyMortyService,private route:ActivatedRoute){
    let firstParam = this.route.snapshot.queryParamMap.get('location');
    if(firstParam){
    this.id=firstParam;
    this.getLocationById();
    }
  }

  async getLocationById():Promise<void>{

    this.serviceApi$.getLocationId(Number(this.id)).subscribe((res)=>{
      this.dataLocation=[res]
      console.log(this.dataLocation)
    })
  }
}
