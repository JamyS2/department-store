import { Component, OnInit } from '@angular/core';
import { Item } from 'src/shared/models/item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  items: Item[] = new Array<Item>(0);
  totalTax: number = 0;
  total: number = 0;  
  isImported: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: Item) {
    let tax = 0;
    this.isImported = newItem.itemName.toLowerCase().includes(Constants.IMPORTED);
    this.items.push(newItem);
    tax = this.calculateTax(newItem);
    console.log("value is " + this.isImported);
    if (!newItem.isExempt || this.isImported) {
      this.total = +(this.total + newItem.amount + tax).toFixed(2);
    } else {
      this.total = +(this.total + newItem.amount).toFixed(2);
    }
  }

  deleteItem(item: Item) {
    let tax = 0;
    let isImported = item.itemName.toLowerCase().includes(Constants.IMPORTED);
    let index = this.items.indexOf(item);
    tax = this.getCurrentTax(item);
    this.items.splice(index, 1);
    if (!item.isExempt || this.isImported) {
      this.total = +(this.total - (item.amount + tax)).toFixed(2);
      this.totalTax -= tax;
    } else {
      if (isImported) {
        this.total = +(this.total - (item.amount + tax)).toFixed(2);
        this.totalTax -= tax;
      } else {
        this.total = +(this.total - item.amount).toFixed(2);
        this.totalTax -= tax;
      }
    }
  }

  getCurrentTax(item: Item): number {
    let tax = 0;
    if (!item.isExempt && this.isImported) {
      tax = this.roundUp(item.amount, 15);
    } else if (!item.isExempt) {
      tax = this.roundUp(item.amount, 10);
    } else {
      if (this.isImported) {
        tax = this.roundUp(item.amount, 5);
      }
    }
    return tax;
  }

  calculateTax(item: Item): number {
    let tax = 0;
    if (!item.isExempt && this.isImported) {
      this.totalTax = +(this.totalTax + this.roundUp(item.amount, 15)).toFixed(2);
      tax = this.roundUp(item.amount, 15);
    } else if (!item.isExempt) {
      this.totalTax =  +(this.totalTax + this.roundUp(item.amount, 10)).toFixed(2);
      tax = this.roundUp(item.amount, 10);
    } else {
      if (this.isImported) {
        this.totalTax =  +(this.totalTax + this.roundUp(item.amount, 5)).toFixed(2);
        tax = this.roundUp(item.amount, 5);
      }
    }
    return tax;
  }

  roundUp(num: number, percent: number): number {
    num = num * percent / 100;
    return +(Math.ceil(num*20)/20).toFixed(2);
  }
}


export abstract class Constants {
  static readonly IMPORTED: string = "imported";
}