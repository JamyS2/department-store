import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/shared/models/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() items: Item;
  @Output() delete: EventEmitter<Item> = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteButtonClicked(item: Item): void {
    this.delete.emit(item);
  }

}
