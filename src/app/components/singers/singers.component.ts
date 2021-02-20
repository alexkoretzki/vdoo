import { ISelectItem } from './../../ui/ak-select/interface/select-item.interface';
import { ISinger } from './../../core/models/singer.interface';
import { SingersService } from './../../core/services/singers/singers.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-singers',
  templateUrl: './singers.component.html',
  styleUrls: ['./singers.component.scss'],
})
export class SingersComponent implements OnInit {
  singers$: Observable<ISelectItem[]>;
  @Output()
  singerSelectedEvnt: EventEmitter<string> = new EventEmitter<string>();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private singersService: SingersService
  ) {}

  ngOnInit(): void {
    this.singers$ = this.singersService.getSingers().pipe(
      map((singers: ISinger[]) => {
        return singers.map((singer) => {
          const selectItem: ISelectItem = {
            id: singer.id,
            displayVal: singer.name,
          };
          return selectItem;
        });
      })
    );
  }
  singerSelected(singerId: string): void {
    this.singerSelectedEvnt.emit(singerId);
  }
}
