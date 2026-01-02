import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { FinnkinoComponent } from './finnkino.component';
import { provideHttpClient } from '@angular/common/http';
import { FetchkinodataService } from '../services/fetchkinodata.service';
import { firstValueFrom } from 'rxjs';

describe('FinnkinoComponent', () => {
  let component: FinnkinoComponent;
  let fixture: ComponentFixture<FinnkinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        FetchkinodataService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
      imports: [FinnkinoComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(FinnkinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should fetch data', () => {
    const service = TestBed.inject(FetchkinodataService);
    const getData = service.getFinnkinoData();
    const httpTesting = TestBed.inject(HttpTestingController);
    const configPromise = firstValueFrom(getData); // subscribe to observable
    //const req = httpTesting.expectOne('https://www.finnkino.fi/xml/News/');
  })
});
