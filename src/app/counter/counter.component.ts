import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() counter = 0;
  public operationMath(id: string): void{
    id === 'plus' ? ++this.counter : --this.counter;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
