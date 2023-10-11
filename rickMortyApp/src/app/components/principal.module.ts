import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ShowPersonComponent } from './show-person/show-person.component';
import { ShowPlaceComponent } from './show-place/show-place.component';
import { ShowEspisodeComponent } from './show-espisode/show-espisode.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexModule } from '@angular/flex-layout';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {HttpClient} from '@angular/common/http';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule, SortDirection} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NgIf, DatePipe} from '@angular/common';
import { ShowPersonDetailComponent } from './show-person/show-person-detail/show-person-detail.component';
import { ShowPlaceDetailComponent } from './show-place/show-place-detail/show-place-detail.component';
import { ShowEpisodeDetailComponent } from './show-espisode/show-episode-detail/show-episode-detail.component';
import { MatTooltipModule } from '@angular/material/tooltip';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personajes', component: ShowPersonComponent},
  { path: 'characterDetail', component: ShowPersonDetailComponent},
  { path: 'episode', component: ShowEspisodeComponent},
  { path: 'episodeDetail', component: ShowEpisodeDetailComponent},
  { path: 'place', component: ShowPlaceComponent},
  { path: 'placeDetail', component: ShowPlaceDetailComponent},

  ];

@NgModule({
  declarations: [HomeComponent,
    ShowPersonComponent,
    ShowPlaceComponent,
    ShowEspisodeComponent,
    ShowPersonDetailComponent,
    ShowPlaceDetailComponent,
    ShowEpisodeDetailComponent],
    imports: [RouterModule.forChild(routes),CommonModule,
      MatButtonModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      FlexModule,
      MatCardModule,
      NgIf,
      MatProgressSpinnerModule,
      MatTableModule,
      MatSortModule,
      MatTooltipModule,
      MatPaginatorModule,
      DatePipe,],
})
export class PrincipalModule { }
