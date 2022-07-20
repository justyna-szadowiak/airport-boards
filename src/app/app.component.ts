import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Arrival, ArrivalOrDeparture, Departure } from './interface';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Airport Boards';
  public data$?: Observable<ArrivalOrDeparture[]>;
  public arrivalsData$: Observable<Arrival[]>
  public departuresData$: Observable<Departure[]>;

  constructor(private apiService: ApiService) {
    this.data$ = this.apiService.getData()

    this.departuresData$ = this.apiService.getData()
      .pipe(map((data: Departure[]) => data.filter(
        element => !!element.schedArr
      )));

    this.arrivalsData$ = this.apiService.getData()
      .pipe(map((dataDep: Arrival[]) => dataDep.filter(
        elem => !!elem.schedDep
      )))
  }

  ngOnInit(): void { }
}
