import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAlbum } from '../../models/album.interface';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private albums: IAlbum[] = [];
  constructor(private http: HttpClient) {}

  getAlbums(artistId: string): Observable<IAlbum[]> {
    const url = `https://api.spotify.com/v1/artists/${artistId}/albums`;
    return this.http.get(url).pipe(
      map((albums) => {
        return (this.albums = albums['items'].map((item) => {
          const album: IAlbum = {
            id: item.id,
            name: item.name,
            cover: item.images[0].url,
            release_date: item.release_date,
          };
          return album;
        }));
      })
    );
  }
  getAlbum(id: string): IAlbum {
    return this.albums.find((album) => album.id === id);
  }
}
