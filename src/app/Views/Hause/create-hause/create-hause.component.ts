import { StatusI } from './../../../models/status.interface';
import { ZoneI } from './../../../models/zone.interface';
import { HauseI } from './../../../models/hause.interface';
import { Component, OnInit, Input } from '@angular/core';
import { HouseServiceService } from './../../../Services/house-service.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create-hause',
  templateUrl: './create-hause.component.html',
  styleUrls: ['./create-hause.component.css'],
})
export class CreateHauseComponent implements OnInit {
  hauseList: HauseI[] = [];
  zoneList: ZoneI[] = [];
  statusList: StatusI[] = [];

  hauseForm = new FormGroup({
    nameHause: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    serviceElectricPower: new FormControl('', [Validators.required]),
    serviceWaterPower: new FormControl('', [Validators.required]),
    serviceSewer: new FormControl('', [Validators.required]),
    statusId: new FormControl('', [Validators.required]),
    zoneId: new FormControl('', [Validators.required]),
  });

  constructor(private apiservice: HouseServiceService, private router: Router,) {}

  ngOnInit(): void {
    this.getHauses();
    this.getZones();
    this.getStatus();
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

  resetForm() {
    this.hauseForm.reset();
  }

  postForm(form: any) {
    console.log(form);

    if (this.hauseForm.valid) {
      this.apiservice.addHause(form).subscribe((data) => {
        this.resetForm();
        this.router.navigate(['list-hauses'])
        Swal.fire({
          icon: 'success',
          title: 'Guardada',
          text: 'La Casa sido Registrada Correctamente',
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
