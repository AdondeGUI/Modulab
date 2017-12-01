import { Component, OnInit, Input } from '@angular/core';
import { Module } from '../../domain/models/module';

@Component({
  selector: 'table-generator',
  templateUrl: './table-generator.component.html',
  styleUrls: ['./table-generator.component.css']
})

export class TableGeneratorComponent {
  rows: any[] = [[]];
  cols: any[] = [];
  table: any[][] = [];
  rowNum: number = 1;
  colNum: number = 1;
  constructor() {
    // this.loadTable(this.data);
  }
  @Input()
  public module : Module;

  public ngOnInit(){
    this.loadTable(this.module.data);
  }

  private adjustTableSize() {
    while(this.colNum != this.rows[0].length || this.rowNum != this.rows.length)
    {
      var col = ' ';
      if(this.colNum > this.rows[0].length){
        for(row of this.rows)
          row.push(col);
      }
      else if(this.colNum < this.rows[0].length){
        for(row of this.rows)
          row.pop();
      }
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
  }

  private saveTable() {
    var output2 = JSON.stringify(this.rows);
    console.log(output2);
    this.module.data = output2;
    // this.loadTable(output2);
   }

  private loadTable(tableStr : string) {
    debugger;
    var rowsTmp = [];
    try {
      rowsTmp = JSON.parse(tableStr);
    } catch (e) {
        return false;
    }
    console.log(rowsTmp[0]);
    this.colNum = rowsTmp[0].length;
    this.rowNum = rowsTmp.length;
    this.adjustTableSize();
    this.rows = rowsTmp;
  }
}
