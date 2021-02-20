import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IAlbum } from 'src/app/core/models/album.interface';
import { ICardItem } from 'src/app/ui/card/interface/card-item.interface';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
})
export class AlbumDetailsComponent implements OnInit {
  private _album: IAlbum;
  @Input() set album(value: IAlbum) {
    this._album = value;
    this.convertToCard();
  }
  get album(): IAlbum {
    return this._album;
  }
  cardItem: ICardItem;
  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {}
  convertToCard(): void {
    this.cardItem = {
      id: this.album.id,
      img: this.album.cover,
      title: this.album.name,
      body: `Release date: ${this.datePipe.transform(
        this.album.release_date,
        'yyyy-MM-dd'
      )}`,
    };
  }
}
