import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { episode } from 'src/app/models/ricky-morty';
import { ApiRickyMortyService } from 'src/app/services/api-ricky-morty.service';

@Component({
  selector: 'app-show-episode-detail',
  templateUrl: './show-episode-detail.component.html',
  styleUrls: ['./show-episode-detail.component.scss']
})
export class ShowEpisodeDetailComponent {

  id="";
  urlImage=""
  dataLocation:episode[]=[];

  constructor(private serviceApi$:ApiRickyMortyService,private route:ActivatedRoute){
    let firstParam = this.route.snapshot.queryParamMap.get('location');
    if(firstParam){
    this.id=firstParam;
    this.getEpisodesById();
    }
  }

  async getEpisodesById():Promise<void>{

    this.serviceApi$.geEpisodesId(Number(this.id)).subscribe((res)=>{
      this.dataLocation=[res]
      console.log(this.dataLocation)
    })
  }
}
