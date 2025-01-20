import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrishowComponent } from './agrishow.component';

describe('AgrishowComponent', () => {
  let component: AgrishowComponent;
  let fixture: ComponentFixture<AgrishowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgrishowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrishowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
