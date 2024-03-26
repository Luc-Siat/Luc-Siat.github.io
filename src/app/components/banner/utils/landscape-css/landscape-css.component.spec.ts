import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeCssComponent } from './landscape-css.component';

describe('LandscapeCssComponent', () => {
  let component: LandscapeCssComponent;
  let fixture: ComponentFixture<LandscapeCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandscapeCssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandscapeCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
