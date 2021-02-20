import { Component } from '@angular/core';
import { IAlbum } from './core/models/album.interface';
import { AlbumsService } from './core/services/albums/albums.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vdoo';
  selectedSinger: string;
  selectedAlbum: IAlbum;
  constructor(private albumsService: AlbumsService) {}
  singerSelected(singerId): void {
    this.selectedAlbum = null; // if we will have more singers so need to reset the selected album
    this.selectedSinger = singerId;
  }
  albumSelected(albumId: string): void {
    this.selectedAlbum = this.albumsService.getAlbum(albumId);
  }
}
