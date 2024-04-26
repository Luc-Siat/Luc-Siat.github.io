
import { AfterViewInit, Component } from '@angular/core';
import { toggleOverflow } from 'src/app/shared/helper-functions/helper';
import data from '../../data-access/songs.json'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  toggleOverflow = toggleOverflow;
  top = '0px';
  currentSongIndex = 0;
  songs = data.songLinks as string[];
  rotationDegree = 0;
  rotationClass = "transform:rotate(0deg)";
   
  ngAfterViewInit(): void {
    this.setSong();
  }

  public setScrollYOffset(e : MouseEvent) {
    this.top = `${+(e.offsetY)}px`;
  }

  private setSong() {
    const iframe = document.getElementById('video-player') as HTMLIFrameElement;
    const rnd = Math.floor(Math.random() * this.songs.length);
    this.currentSongIndex = rnd;

    iframe.src = this.songs[this.currentSongIndex];
  }

  public setNextSong(iframe : HTMLIFrameElement) {
    this.currentSongIndex = this.currentSongIndex  + 1 >= this.songs.length 
      ? 0
      : this.currentSongIndex += 1 ;
    iframe.src = this.songs[this.currentSongIndex] + "?autoplay=1";
  }

  public rotateRefresh(degree : number) {
    this.rotationDegree += degree;
    let degClass = 'transform: rotate(' + this.rotationDegree.toString() + 'deg)';
    this.rotationClass = degClass;
  }
}
