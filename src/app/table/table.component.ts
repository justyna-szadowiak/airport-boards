import { Component, Input, OnInit } from '@angular/core';
import { ArrivalOrDeparture } from '../interface';

type Status = 'Boarding' | 'on position' | 'closed' | 'baggage delivery' | 'departed' | 'landed' | 'ready for Boarding';
type Color = 'green' | 'red' | 'yellow' | 'orange';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data?: ArrivalOrDeparture[];

  displayedColumns: string[] = ['time', 'apname', 'fnr', 'gate', 'status'];

  constructor() { }

  ngOnInit() {  }

  statusToClass(status: Status): Color {
    if(status === 'Boarding'){
      return 'green';
    } else if (status === 'on position'){
      return 'yellow';
    } else if (status === 'closed'){
      return 'red';
    } else if (status === 'baggage delivery'){
      return 'orange';
    } else if (status === 'departed'){
      return 'red';
    } else if (status === 'landed'){
      return 'green';
    } else {
      return "yellow"
    }
  }

  tst(row: any): string {
    console.log(row);
    return ''
  }
}
