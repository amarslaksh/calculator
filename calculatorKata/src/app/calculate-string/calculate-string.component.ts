import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate-string',
  templateUrl: './calculate-string.component.html',
  styleUrls: ['./calculate-string.component.css']
})
export class CalculateStringComponent implements OnInit {

  outputMessage:string = '';
  constructor() { }

  ngOnInit(): void {
  }

  add(numbers:any) {
    let values = numbers.split(/(?!^-)[,\n]/g);
    let delimeter = "//;\\n1;2";
    let breakStr = delimeter.split(";");
    //console.log(breakStr);
    let total = 0;
    for(let i=0; i<values.length; i++) {
        total += parseInt(values[i] || 0);
    }
    console.log(numbers.split(/(?!^-)/g).includes('-'));
    if(numbers.split(/(?!^-)/g).includes('-') == true) {
      this.outputMessage = "Negative numbers are not allowed"
    }
    return total;
  }

}
