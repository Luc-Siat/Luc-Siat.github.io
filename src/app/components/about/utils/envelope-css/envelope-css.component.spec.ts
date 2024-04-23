import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeCssComponent } from './envelope-css.component';

describe('EnvelopeCssComponent', () => {
  let component: EnvelopeCssComponent;
  let fixture: ComponentFixture<EnvelopeCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnvelopeCssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnvelopeCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
