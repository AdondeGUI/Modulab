import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-generator',
  templateUrl: './table-generator.component.html',
  styleUrls: ['./table-generator.component.css']
})

export class TableGeneratorComponent {
  rows: any[] = [];
  cols: any[] = [];
  rowNum: number = 1;
  colNum: number = 1;
  constructor() {
  }

  private adjustTableSize() {
    console.log('Cols: ' + this.cols.length);
    console.log('Rows: ' + this.rows.length);
    console.log('ColNum: ' + this.colNum);
    console.log('RowNum: ' + this.rowNum);

    while(this.colNum != this.cols.length || this.rowNum != this.rows.length)
    {
      var col = {'one':this.colNum}
      if(this.colNum > this.cols.length)
        this.cols.push(col);
      else if(this.colNum < this.cols.length)
        this.cols.pop();
      var row = {'one':this.rowNum}
      if(this.rowNum > this.rows.length)
      {
        console.log('Add Row');
        console.log(row);
        this.rows.push(row);
      }
      else if(this.rowNum < this.rows.length)
      {
        console.log('Pop Row');
        this.rows.pop();
      }
    }
  }
}
