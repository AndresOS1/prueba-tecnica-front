import { Component, OnInit } from '@angular/core';
import { HouseServiceService } from './../../../Services/house-service.service'

@Component({
  selector: 'app-show-hause',
  templateUrl: './show-hause.component.html',
  styleUrls: ['./show-hause.component.css']
})
export class ShowHauseComponent implements OnInit {

  constructor(private apiservice:HouseServiceService) { }

  ngOnInit(): void {
  }

}
