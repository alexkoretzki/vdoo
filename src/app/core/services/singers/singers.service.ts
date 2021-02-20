import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISinger } from '../../models/singer.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SingersService {
  constructor(private http: HttpClient) {}
  // not in use but if we will have filtering/sorting in client so we will need a subject to notify subscribers
  private singersSubject: BehaviorSubject<ISinger[]> = new BehaviorSubject<
    ISinger[]
  >([]);
  private _singers: ISinger[] = [];

  set singers(s: ISinger[]) {
    this._singers = s;
  }
  get singers(): ISinger[] {
    return this._singers;
  }

  getSingers(): Observable<ISinger[]> {
    return this.http
      .get('https://api.spotify.com/v1/artists?ids=0du5cEVh5yTK9QJze8zA0C')
      .pipe(
        map((res) => {
          this.singers = res['artists'];
          return res['artists'].map((artist) => {
            return { id: artist.id, name: artist.name };
          });
        })
      );
  }
}
