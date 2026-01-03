import { Component, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Observable, of } from 'rxjs';
import { FetchkinodataService } from '../services/fetchkinodata.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SearchFilter } from '../pipes/searchFilter.pipe';
import { effect, inject, signal } from '@angular/core';

@Component({
  selector: 'app-finnkino',
  standalone: true,
  imports: [ MatExpansionModule, CommonModule, MatInputModule, FormsModule, SearchFilter ],
  templateUrl: './finnkino.component.html',
  styleUrl: './finnkino.component.css'
})
export class FinnkinoComponent {

  searchString: string = '';
  readonly panelOpenState = signal(false); // for the mat-expansion panel
  jokeData$: any[] = [];
  norrisJoke = new Observable<any>;
  norrisText: string = '';
  private kinoService = inject(FetchkinodataService);

ngOnInit(): void {
  }
  
  //this.observe.forEach((value) => {
   // this.finnkinoData$.push(value);
  //})
//    data => this.finnkinoData$ = data,
//    error => console.error('Cannot get data: ', error)
//  );

  constructor() {
    effect(() => {
      this.norrisJoke = this.kinoService.getFinnkinoData();
  })
  }
}
