import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/shared/models/item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item: Item;
  @Output() xButtonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onXButtonClick(): void {
    this.xButtonClick.emit();
  }

}
