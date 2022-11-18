import { StatusI } from './../../../models/status.interface';
import { ZoneI } from './../../../models/zone.interface';
import { HauseI } from './../../../models/hause.interface';
import { Component, OnInit } from '@angular/core';
import { HouseServiceService } from './../../../Services/house-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-hause',
  templateUrl: './list-hause.component.html',
  styleUrls: ['./list-hause.component.css'],
})
export class ListHauseComponent implements OnInit {
  hauseList: HauseI[] = [];
  zoneList: ZoneI[] = [];
  statusList: StatusI[] = [];

  hauseZoneMap: Map<number, string> = new Map();
  hauseStatus: Map<number, string> = new Map();

  constructor(private apiservice: HouseServiceService) {}

  ngOnInit(): void {
    this.getHauses();
    this.getZones();
    this.getStatus();
  }

  getHauses() {
    this.apiservice.getHauses().subscribe((data) => {
      this.hauseList = data;
    });
  }

  getZones() {
    this.apiservice.getZones().subscribe((data) => {
      this.zoneList = data;

      for (let i = 0; i < data.length; i++) {
        this.hauseZoneMap.set(this.zoneList[i].id, this.zoneList[i].nameZone);
      }
    });
  }

  deleteHause(id: any) {
    console.log(id);

    Swal.fire({
      title: 'Eliminar Casa',
      text: '¿Desea eliminar esta Casa?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#007bb8',
      cancelButtonColor: '#2d2d2d',
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiservice.deleteHause(id).subscribe((res) => {
          this.getHauses();

          Swal.fire({
            icon: 'success',
            title: 'Eliminada',
            text: 'La Casa a sido Eliminada Correctamente',
          });
        });
      }
    });
  }

  getStatus() {
    this.apiservice.getStatus().subscribe((data) => {
      this.statusList = data;

      for (let i = 0; i < data.length; i++) {
        this.hauseStatus.set(
          this.statusList[i].id,
          this.statusList[i].statusName
        );
      }
    });
  }
}
