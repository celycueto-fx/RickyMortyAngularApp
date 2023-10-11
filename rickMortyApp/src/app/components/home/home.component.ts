import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

constructor (private router:Router){

}
  showPersonajes(){
    this.router.navigate(['/personajes']) }
    showEpisode(){
      this.router.navigate(['/episode']) }
      showPlace(){
        this.router.navigate(['/place']) }

}
