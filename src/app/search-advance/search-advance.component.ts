import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Type } from '../pokemon.model';

@Component({
  selector: 'app-search-advance',
  templateUrl: './search-advance.component.html',
  styleUrls: ['./search-advance.component.scss']
})
export class SearchAdvanceComponent implements OnInit {
  @Input() types!: Type[];
  @Output() selectTypeEvent = new EventEmitter<number | string>();
  indexType!: number | string

  constructor() { }

  selectType(value: number) {
    this.indexType != value ? this.indexType = value : this.indexType = ''
    this.selectTypeEvent.emit(this.indexType);
  }

  ngOnInit(): void {
  }

}
