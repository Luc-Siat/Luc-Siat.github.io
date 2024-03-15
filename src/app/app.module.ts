import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectCardComponent } from './components/project-list/project-card/project-card.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { MainContainerComponent } from './utils/main-container/main-container.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars as fasBars,
  faPersonDigging as fasPersonDigging,
  faPaperPlane as fasPaperPlane,
  faGear as fasGear,
  faChevronDown as fasChevronDown,
  faChevronUp as fasChevronUp
} from '@fortawesome/free-solid-svg-icons';
import { NavbarSettingsComponent } from './components/navbar/settings/navbar-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ProjectCardComponent,
    ProjectListComponent,
    MainContainerComponent,
    NavbarSettingsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(library: FaIconLibrary) {
    library.addIcons(
      fasBars,
      fasPersonDigging,
      fasPaperPlane,
      fasChevronDown,
      fasGear,
      fasChevronUp
    );
  }
 }
