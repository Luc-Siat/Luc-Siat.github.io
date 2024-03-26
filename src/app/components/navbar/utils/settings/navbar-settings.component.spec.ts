import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSettingsComponent } from './navbar-settings.component';

describe('SettingsComponent', () => {
  let component: NavbarSettingsComponent;
  let fixture: ComponentFixture<NavbarSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
