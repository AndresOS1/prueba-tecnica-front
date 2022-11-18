import { StatusI } from './../../../models/status.interface';
import { ZoneI } from './../../../models/zone.interface';
import { HauseI } from './../../../models/hause.interface';
import { Component, OnInit, Input } from '@angular/core';
import { HouseServiceService } from './../../../Services/house-service.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-update-hause',
  templateUrl: './update-hause.component.html',
  styleUrls: ['./update-hause.component.css']
})
export class UpdateHauseComponent implements OnInit {
  hauseList: HauseI[] = [];
  hause?: HauseI;
  zoneList: ZoneI[] = [];
  statusList: StatusI[] = [];

  id = this.activerouter.snapshot.paramMap.get('id');

  hauseForm = new FormGroup({
    id : new FormControl(this.id),
    nameHause: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    serviceElectricPower: new FormControl('', [Validators.required]),
    serviceWaterPower: new FormControl('', [Validators.required]),
    serviceSewer: new FormControl('', [Validators.required]),
    statusId: new FormControl('', [Validators.required]),
    zoneId: new FormControl('', [Validators.required]),
  });

  constructor(private apiservice: HouseServiceService, private router: Router, private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.getHauses();
    this.getZones();
    this.getStatus();
    this.getHause(this.id)
  }

  getHause(id:any){
    this.apiservice.getHause(id).subscribe(data => {

      this.hause = data
      console.log(this.hause);


      this.hauseForm.setValue({
        "id": this.hause.id,
        "nameHause" : this.hause.nameHause,
        "description" : this.hause.description,
        "serviceElectricPower" : this.hause.serviceElectricPower,
        "serviceWaterPower" : this.hause.serviceWaterPower,
        "serviceSewer" : this.hause.serviceSewer,
        "statusId" : this.hause.statusId,
        "zoneId" : this.hause.zoneId,
      })

    })

  }

  getHauses() {
    this.apiservice.getHauses().subscribe((data) => {
      this.hauseList = data;
      // console.log(this.hauseList.length);
    });
  }

  getZones() {
    this.apiservice.getZones().subscribe((data) => {
      this.zoneList = data;
    });
  }

  getStatus() {
    this.apiservice.getStatus().subscribe((data) => {
      this.statusList = data;
    });
  }



  postForm(form: any) {
    console.log(form);

    if (this.hauseForm.valid) {
      this.apiservice.updateHause(this.id,form).subscribe((data) => {
        this.router.navigate(['list-hauses'])
        Swal.fire({
          icon: 'success',
          title: 'Actualizada',
          text: 'La Casa sido Actualizada Correctamente',
        });
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error...',
        text: 'Todos los campos son obligatorios',
      });
    }
  }
}
