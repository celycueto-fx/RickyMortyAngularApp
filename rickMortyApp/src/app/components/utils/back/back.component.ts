import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})
export class BackComponent {

  character = "";
  episode = "";
  location = "";
  constructor(private router: Router, private route: ActivatedRoute) {
    let firstParamc = this.route.snapshot.queryParamMap.get('character');
    let firstParaml = this.route.snapshot.queryParamMap.get('location');
    let firstParame = this.route.snapshot.queryParamMap.get('episode');

    if (firstParamc) {
      this.character = firstParamc;
    }
    if (firstParame) {
      this.episode = firstParame;
    }
    if (firstParaml) {
      this.location = firstParaml;
    }
  }

  back() {
    this.router.navigate(['']);
    if (this.character) {
      this.router.navigate(['/personajes']);
    }
    if (this.episode) {
      this.router.navigate(['/episode']);
    }
    if (this.location) {
      this.router.navigate(['/place']);
    }
  }
}
