export interface Flight {
  ac: string,
  lu: string,
  typ: string,
  al: string,
  fnr: string,
  terminal: string,
  halle?: string,
  esti?: string,
  duration?: number,
  s: boolean,
  iata: string,
  sched: string,
  reg: string,
  apname: string,
  id: string,
  gate?: string,
  lang: string,
  alname: string,
  ausgang?: string,
  flstatus: number,
  status: string
}

export interface Departure extends Flight {
  schedArr?: string,
  schalter?: string,
  cs?: string[],
  stops?: number
}

export interface Arrival extends Flight {
  bag?: string[],
  schedDep?: string
}

export type ArrivalOrDeparture = Arrival | Departure;
