import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';
import { Supercounter } from '../supercounter';
import { Superdupercounter } from '../superdupercounter';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  name: string = 'Counter Wall';
  counters: Counter[] = [];
  supercounters: Supercounter[] = [];
  superdupercounters: Superdupercounter[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  create() {
    let firstCount: Counter = new Counter();
    let firstSupercount: Supercounter = new Supercounter();
    let firstSuperDupercount: Superdupercounter = new Superdupercounter();


    if (this.counters.length < 5) {
      this.counters.push(firstCount);
    }
    else {
      for (let cnt = this.counters.length - 1; cnt >=0; cnt --) {
        firstSupercount.value += this.counters[cnt].value;
        this.counters.pop();
      }
    if (this.supercounters.length < 2) {
    this.supercounters.push(firstSupercount);
    }
    else {
      for (let supcnt = this.supercounters.length - 1; supcnt >=0; supcnt --) {
        firstSuperDupercount.value += this.supercounters[supcnt].value;
        this.supercounters.pop();
      }
      this.superdupercounters.push(firstSuperDupercount);
    }
    }
  }

}
