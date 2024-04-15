import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHobbiesComponent } from './about-hobbies.component';

describe('AboutHobbiesComponent', () => {
  let component: AboutHobbiesComponent;
  let fixture: ComponentFixture<AboutHobbiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutHobbiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
