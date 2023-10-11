import { RickyMorty } from './../../../models/ricky-morty';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiRickyMortyService } from 'src/app/services/api-ricky-morty.service';

@Component({
  selector: 'app-show-person-detail',
  templateUrl: './show-person-detail.component.html',
  styleUrls: ['./show-person-detail.component.scss']
})
export class ShowPersonDetailComponent {
  id="";
  urlImage=""
  dataCharacter:RickyMorty[]=[];
  constructor(private serviceApi$:ApiRickyMortyService,private route:ActivatedRoute){
    let firstParam = this.route.snapshot.queryParamMap.get('character');
    if(firstParam){
    this.id=firstParam;
    this.getCharacterById();
    }
  }

  async getCharacterById():Promise<void>{
    this.serviceApi$.getCaracterId(Number(this.id)).subscribe((res)=>

    {
      this.urlImage=res.image
      this.dataCharacter=[res];

    })
  }

}
