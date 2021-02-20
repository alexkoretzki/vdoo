import { ISelectItem } from './../../ui/ak-select/interface/select-item.interface';
import { AlbumsService } from './../../core/services/albums/albums.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAlbum } from 'src/app/core/models/album.interface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  albums$: Observable<ISelectItem[]>;
  @Output() albumSelectedEvt: EventEmitter<string> = new EventEmitter<string>();
  private _artistId: string;
  @Input() set artistId(value: string) {
    this._artistId = value;
    this.loadAlbums();
  }
  get artistId(): string {
    return this._artistId;
  }
  constructor(private router: Router, private albumsService: AlbumsService) {}

  ngOnInit(): void {}
  loadAlbums() {
    if (this.artistId) {
      this.albums$ = this.albumsService.getAlbums(this.artistId).pipe(
        map((albums: IAlbum[]) => {
          return albums.map((album: IAlbum) => {
            return {
              id: album.id,
              displayVal: album.name,
            };
          });
        })
      );
    }
  }
  albumSelected(albumId: string): void {
    this.albumSelectedEvt.emit(albumId);
  }
}
