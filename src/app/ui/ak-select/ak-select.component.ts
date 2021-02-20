import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISelectItem } from './interface/select-item.interface';

@Component({
  selector: 'app-ak-select',
  templateUrl: './ak-select.component.html',
  styleUrls: ['./ak-select.component.scss'],
})
export class AkSelectComponent implements OnInit {
  @Input() data: ISelectItem[] = [];
  @Output()
  dropdownSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  selectionChanged(e): void {
    this.dropdownSelectionChanged.emit(e.target.value);
  }
}
