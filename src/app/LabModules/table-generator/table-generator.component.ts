import { Component, OnInit, Input } from '@angular/core';
import { Module } from '../../domain/models/module';

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
  public module : Module;

  private adjustTableSize() {
    while(this.colNum != this.cols.length || this.rowNum != this.rows.length)
    {
      var col = ' ';
      if(this.colNum > this.cols.length)
        this.cols.push(col);
      else if(this.colNum < this.cols.length)
        this.cols.pop();
      var row : any[] = [];
      if(this.rowNum > this.rows.length)
      {
        this.rows.push(row);
      }
      else if(this.rowNum < this.rows.length)
      {
        this.rows.pop();
      }
    }
    if(this.rows.length == 4)
    {
      this.loadTable('[["4","7","6","3435.3"],["653.45","7.7","6445","3436.7"],["44.0","866","556","343.3"]]');
    }
    this.saveTable()
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
     this.module.data = output2;
    // this.loadTable(output2);
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
