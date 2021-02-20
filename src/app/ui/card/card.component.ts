import { Component, Input, OnInit } from '@angular/core';
import { ICardItem } from './interface/card-item.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() item: ICardItem;
  constructor() {}

  ngOnInit(): void {}
}
