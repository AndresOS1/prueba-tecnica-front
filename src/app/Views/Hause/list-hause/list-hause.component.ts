import { StatusI } from './../../../models/status.interface';
import { ZoneI } from './../../../models/zone.interface';
import { HauseI } from './../../../models/hause.interface';
import { Component, OnInit } from '@angular/core';
import { HouseServiceService } from './../../../Services/house-service.service'
import { Observable } from "rxjs";

@Component({
  selector: 'app-list-hause',
  templateUrl: './list-hause.component.html',
  styleUrls: ['./list-hause.component.css']
})
export class ListHauseComponent implements OnInit {

  hauseList$!: Observable<HauseI[]>;
  zonesList$!: Observable<ZoneI[]>;
  zoneList:ZoneI[] = [];
  statusList$!: Observable<StatusI[]>;
  statusList:StatusI[] = [];


  constructor(private apiservice:HouseServiceService) { }

  ngOnInit(): void {
    this.hauseList$ = this.apiservice.getHauses();
    console.log(this.hauseList$);
    
  }

}
