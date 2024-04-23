import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorgiCssComponent } from './corgi-css.component';

describe('CorgiCssComponent', () => {
  let component: CorgiCssComponent;
  let fixture: ComponentFixture<CorgiCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorgiCssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorgiCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
