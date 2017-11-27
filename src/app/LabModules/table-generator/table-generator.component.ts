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
    // this.loadTable(this.data);
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
    if(this.rows.length >= 4)
    {
      this.loadTable('[{"0":"234","1":"234234","2":"2443","one":1},{"0":"3344","1":"fffs","2":"s34","one":2},{"0":"342f","1":"gfde","2":"45ggf","one":3}]');
    }
  }

  private saveTable() {
    var output2 = JSON.stringify(this.rows);
    // var output = "[";
    // for(var i=0;i<this.rowNum;i++)
    // {
    //   output += "[";
    //   for(var j=0;j<this.colNum;j++){
    //     output += (this.rows[i][j] != undefined) ? "\"" + this.rows[i][j] + "\"" : "\"0\"";
    //     output += (j != this.colNum - 1) ? "," : "";
    //   }
    //   output += (i != this.rowNum - 1) ? "]," : "]";
    // }
    // output += "]";
    console.log(output2);
    this.data = output2;
    this.loadTable(output2);
   }

  private loadTable(tableStr : string) {
    var rowsTmp = JSON.parse(tableStr);
    //  this.colNum = rowsTmp[0].length;
    //  this.rowNum = rowsTmp.length;
    //  this.adjustTableSize();
     this.rows = rowsTmp;


    // var tableTmp = [];
    // var n =0;
    // while(n<3)
    // {
    //   var rowTmp = tableStr.substr(tableStr.indexOf("["),tableStr.indexOf("]")+1);
    //   console.log(rowTmp);
    //   var m = 0;
    //   while(rowTmp.indexOf("]") != 0 && rowTmp.indexOf("]") != 1 && m<10)
    //   {
    //     var colTmp = rowTmp.substr(0,rowTmp.indexOf(",")-1);
    //     console.log(colTmp);
    //     rowTmp = rowTmp.substr(rowTmp.indexOf(",")+1);
    //     m++;
    //   }
    //   n++;
    //   tableStr = tableStr.substr(tableStr.indexOf("]")+1);
    // };
  }
}
