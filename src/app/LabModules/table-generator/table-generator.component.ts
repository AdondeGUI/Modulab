import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-generator',
  templateUrl: './table-generator.component.html',
  styleUrls: ['./table-generator.component.css']
})

export class TableGeneratorComponent {
  rows: any[] = [];
  cols: any[] = [];
  table: any[][] = [];
  rowNum: number = 1;
  colNum: number = 1;
  constructor() {
  }
  @Input()
  public data : string;
  // obj = JSON.parse(this.data);

  private adjustTableSize() {
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
     console.log(this.rows);

  }

  // private saveTable() {
  //   for (var i=0;i<this.rowNum; i++){
  //     var row : any [];
  //     for (var j=0;j<this.colNum;j++){
  //       var x = document.getElementById("i j").name;
  //       row.push(id=["i j"]);
  //     }
  //     this.table.push(row);
  //   }
  // }
  //
  // private changeValue(i : number, j: number) {
  //   this.table[i][j] = cellValue;
  // }
}
