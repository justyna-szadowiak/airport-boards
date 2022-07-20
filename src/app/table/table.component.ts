import { Component, Input, OnInit } from '@angular/core';
import { ArrivalOrDeparture } from '../interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data?: ArrivalOrDeparture[];

  displayedColumns: string[] = ['time', 'apname', 'fnr', 'gate', 'status'];

  constructor() { }

  ngOnInit(): void {  }
}
