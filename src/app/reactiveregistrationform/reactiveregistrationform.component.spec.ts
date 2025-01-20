import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveregistrationformComponent } from './reactiveregistrationform.component';

describe('ReactiveregistrationformComponent', () => {
  let component: ReactiveregistrationformComponent;
  let fixture: ComponentFixture<ReactiveregistrationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveregistrationformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveregistrationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
