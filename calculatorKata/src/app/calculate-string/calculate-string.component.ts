import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate-string',
  templateUrl: './calculate-string.component.html',
  styleUrls: ['./calculate-string.component.css']
})
export class CalculateStringComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  add(numbers:any) {
    let values = numbers.split(/[,\n]/g);
    let total = 0;
    for(let i=0; i<values.length; i++) {
      total += parseInt(values[i]|| 0);
    }
    return total;
  }

}
