import { Component, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Observable, of } from 'rxjs';
import { FetchkinodataService } from '../services/fetchkinodata.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SearchFilter } from '../pipes/searchFilter.pipe';

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
  finnkinoData$: Observable<any>;

ngOnInit(): void {
  this.finnkinoData$ = this.kinoService.getFinnkinoData();
  }

  constructor (private kinoService: FetchkinodataService) {
    this.finnkinoData$ = new Observable<any>();
  }
}
