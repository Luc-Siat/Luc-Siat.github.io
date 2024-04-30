import { Component } from '@angular/core';
import data from '../../data-access/songs.json'

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent {
  songs = data.songLinks as string[];
  rotationDegree = 0;
  rotationClass = "transform:rotate(0deg)";
  currentSongIndex = 0;

  ngAfterViewInit(): void {
    this.setSong();
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
