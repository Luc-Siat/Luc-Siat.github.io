import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/features/navbar/navbar.component';
import { AboutComponent } from './components/about/features/about/about.component';
import { ProjectCardComponent } from './components/projects/features/project-list/project-card/project-card.component';
import { ProjectListComponent } from './components/projects/features/project-list/project-list.component';
import { ContainerComponent } from './shared/container/container.component';
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
  faDiceD20 as fasDiceD20,
  faHammer as fasHammer,
  faCompactDisc as faCompactDisc,
  faEnvelope,
  faDiceD20,
  faDog,
  faRotate,
} from '@fortawesome/free-solid-svg-icons';

import { NavbarSettingsComponent } from './components/navbar/utils/settings/navbar-settings.component';
import { SideDrawerComponent } from './components/navbar/features/side-drawer/side-drawer.component';
import { SectionComponent } from './shared/section/section.component';
import { BannerComponent } from './components/banner/features/banner/banner.component';
import { ExperiencesListComponent } from './components/experience/features/experience/experiences-list.component';
import { ProjectDetailComponent } from './components/projects/features/project-detail/project-detail.component';
import { faGithub as fabGithub,
        faLinkedinIn as fabLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { ContactComponent } from './components/contact/features/contact/contact.component';
import { TrainCssComponent } from './components/about/utils/train-css/train-css.component';
import { ExperienceCardComponent } from './components/experience/features/experience-card/experience-card.component';
import { EnvelopeCssComponent } from './components/about/utils/envelope-css/envelope-css.component';
import { CorgiCssComponent } from './components/banner/utils/corgi-css/corgi-css.component';
import { LandscapeCssComponent } from './components/banner/utils/landscape-css/landscape-css.component';
import { HobbyButtonComponent } from './components/about/utils/hobby-button/hobby-button.component';
import { BackstoryComponent } from './components/about/features/about/backstory/backstory.component';
import { HobbiesComponent } from './components/about/features/about/hobbies/hobbies.component';
import { getSafePropertyAccessString } from '@angular/compiler';



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
    ExperiencesListComponent,
    ProjectDetailComponent,
    ContactComponent,
    TrainCssComponent,
    ExperienceCardComponent,
    EnvelopeCssComponent,
    CorgiCssComponent,
    LandscapeCssComponent,
    HobbiesComponent,
    HobbyButtonComponent,
    BackstoryComponent,
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
      faEnvelope,
      faCompactDisc,
      faDiceD20,
      faDog,
      faRotate
    );
  }
}
