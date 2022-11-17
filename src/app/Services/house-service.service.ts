import { ZoneI } from './../models/zone.interface';
import { StatusI } from './../models/status.interface';
import { HauseI } from './../models/hause.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HouseServiceService {
  urlApi: string = 'https://localhost:7146/api/';

  constructor(private http: HttpClient) {}

  getHauses(): Observable<HauseI[]> {
    let endpoint = 'Hauses';
    let direccion = this.urlApi + endpoint;

    return this.http.get<HauseI[]>(direccion);
  }

  getHause(id:number | string): Observable<HauseI> {
    let endpoint = 'Hauses/' + id;
    let direccion = this.urlApi + endpoint;

    return this.http.get<HauseI>(direccion);
  }

  addHause(form: HauseI): Observable<HauseI> {
    let endpoint = 'Hauses';

    let direccion = this.urlApi + endpoint;

    return this.http.post<HauseI>(direccion, form);
  }

  updateHause(id: number | string, form: HauseI) {
    let endpoint = 'Hauses/' + id;

    let direccion = this.urlApi + endpoint;

    return this.http.put(direccion, form);
  }

  deleteHause(id: number | string) {
    let endpoint = 'Hauses/' + id;

    let direccion = this.urlApi + endpoint;

    return this.http.delete(direccion);
  }

  /////////////////////////////////////////////////////

  getStatus(): Observable<StatusI[]> {
    let endpoint = 'Status';
    let direccion = this.urlApi + endpoint;

    return this.http.get<StatusI[]>(direccion);
  }

  addStatus(form: StatusI): Observable<StatusI> {
    let endpoint = 'Status';

    let direccion = this.urlApi + endpoint;

    return this.http.post<StatusI>(direccion, form);
  }

  updateStatus(id: number | string, form: StatusI) {
    let endpoint = 'Status/' + id;

    let direccion = this.urlApi + endpoint;

    return this.http.put(direccion, form);
  }

  deleteStatus(id: number | string) {
    let endpoint = 'Status/' + id;

    let direccion = this.urlApi + endpoint;

    return this.http.delete(direccion);
  }


  /////////////////////////////////////////////////////


  getZones(): Observable<ZoneI[]> {
    let endpoint = 'Zones';
    let direccion = this.urlApi + endpoint;

    return this.http.get<ZoneI[]>(direccion);
  }

  addZones(form: ZoneI): Observable<ZoneI> {
    let endpoint = 'Zones';

    let direccion = this.urlApi + endpoint;

    return this.http.post<ZoneI>(direccion, form);
  }

  updateZones(id: number | string, form: ZoneI) {
    let endpoint = 'Zones/' + id;

    let direccion = this.urlApi + endpoint;

    return this.http.put(direccion, form);
  }

  deleteZones(id: number | string) {
    let endpoint = 'Zones/' + id;

    let direccion = this.urlApi + endpoint;

    return this.http.delete(direccion);
  }
}
