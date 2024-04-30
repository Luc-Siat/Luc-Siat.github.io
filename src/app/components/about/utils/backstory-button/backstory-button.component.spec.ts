import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackstoryButtonComponent } from './backstory-button.component';

describe('BackstoryButtonComponent', () => {
  let component: BackstoryButtonComponent;
  let fixture: ComponentFixture<BackstoryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackstoryButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackstoryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
