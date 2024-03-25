import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectCardComponent } from './components/projects/features/project-list/project-card/project-card.component';
import { ProjectListComponent } from './components/projects/features/project-list/project-list.component';
import { ContainerComponent } from './utils/container/container.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars as fasBars,
  faPersonDigging as fasPersonDigging,
  faPaperPlane as fasPaperPlane,
  faGear as fasGear,
  faChevronDown as fasChevronDown,
  faChevronUp as fasChevronUp,
  faDesktop as fasDesktop,
  faWandMagicSparkles as fasWandMagicSparkles,
  faHeart as fasHeart,
  faCompass as fasCompass,
  faCheck as fasCheck,
  faGamepad as fasGamepad,
  faPersonHiking as fasPersonHiking,
  faMountain as fasMountain,
  faPuzzlePiece as fasPuzzlePiece,
  faHammer as fasHammer,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import { NavbarSettingsComponent } from './components/navbar/settings/navbar-settings.component';
import { SideDrawerComponent } from './components/navbar/side-drawer/side-drawer.component';
import { SectionComponent } from './utils/section/section.component';
import { BannerComponent } from './utils/banner/banner.component';
import { AboutCardComponent } from './components/about/about-card/about-card.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectDetailComponent } from './components/projects/features/project-detail/project-detail.component';
import { faGithub as fabGithub,
        faLinkedinIn as fabLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ProjectCardComponent,
    ProjectListComponent,
    ContainerComponent,
    NavbarSettingsComponent,
    SideDrawerComponent,
    SectionComponent,
    BannerComponent,
    AboutCardComponent,
    ExperienceComponent,
    ProjectDetailComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{

  constructor(library: FaIconLibrary) {
    library.addIcons(
      fasBars,
      fasPersonDigging,
      fasPaperPlane,
      fasChevronDown,
      fasGear,
      fasChevronUp,
      fabGithub,
      fasDesktop,
      fasWandMagicSparkles,
      fasHeart,
      fasCompass,
      fasCheck,
      fasGamepad,
      fasPuzzlePiece,
      fasMountain,
      fasPersonHiking,
      fasHammer,
      fabLinkedinIn,
      faEnvelope
    );
  }

 }
