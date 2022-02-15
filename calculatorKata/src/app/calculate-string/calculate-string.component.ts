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
    let values = numbers.split(',');
    return parseFloat(values[0] || 0) + parseFloat(values[1] || 0);
  }

}
