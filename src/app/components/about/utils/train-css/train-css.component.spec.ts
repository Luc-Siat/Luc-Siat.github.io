import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainCssComponent } from './train-css.component';

describe('TrainCssComponent', () => {
  let component: TrainCssComponent;
  let fixture: ComponentFixture<TrainCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainCssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
