import { Component, OnInit } from '@angular/core';
import { University } from 'src/app/interfaces/university';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
isClicked: boolean = true;
universities: University[] = []
termino: string = '';
btnClass: string = 'btn-primary'

  constructor(private service: ServiceService,
    ) { }

  ngOnInit(): void {
  }

getSpainData() {
  return this.service.getDataSpain()
          .subscribe(data => 
            console.log(this.universities = data)
            )
}

getUkData() {
  return this.service.getDataUk()
          .subscribe(data => 
            console.log(this.universities = data)
            )
}

getPortugalData() {
  return this.service.getDataPortugal()
          .subscribe(data => 
            console.log(this.universities = data)
            )
}

searching() {
  this.service.getDataTyping(this.termino.trim())
    .subscribe(unis => this.universities = unis)
}

}