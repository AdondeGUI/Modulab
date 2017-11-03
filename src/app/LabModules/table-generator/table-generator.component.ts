import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-generator',
  templateUrl: './table-generator.component.html',
  styleUrls: ['./table-generator.component.css']
})

export class tableGeneratorComponent {
  rows: any[] = [];
  cols: any[] = [];
  rowNum: number;
  colNum: number;
  constructor() {
  }

  private adjustTableSize() {
    var shit = {'one':this.rowNum,'two':this.colNum}
    this.rows.push(shit);
    // var rowsVal = this.rowNum;
    // for(item in rows)
    //   delete this.rows();
    // for(var i=0;i<rowsVal; i++)
    //   this.rows.push(shit);

    // var tableBody = '';
    // var rows = document.getElementById('tableRows').value;
    // alert(rows);
    // for(var i = 0; i<rows; i++){
    //   tableBody +="<tr><td>Row Content</td><td>Row Content</td><td>Row Content</td><td>Row Content</td></tr>";
    // }
    // $('dataTableBody').html(tableBody);
  }

  // private addCol() {
  //   var shit = {'one':this.rowNum,'two':this.colNum}
  //   this.rows.push(shit);
  // }
}
