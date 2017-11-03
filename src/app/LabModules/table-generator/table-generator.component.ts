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
    console.log('Cols: ' + this.cols.length);
    console.log('Rows: ' + this.rows.length);
    console.log('ColNum: ' + this.colNum);
    console.log('RowNum: ' + this.rowNum);

  //  while(this.colNum != this.cols.length && this.rowNum != this.rows.length)
  //  {
      var col = {'one':this.colNum}
      if(this.colNum > this.cols.length)
        this.cols.push(col);
      else if(this.colNum < this.cols.length)
        this.cols.pop();
      var shit = {'one':this.rowNum, 'two':this.colNum}
      if(this.rowNum > this.rows.length)
      {
        console.log('Add Row');
        console.log(shit);
        this.rows.push(shit);
      }
      else if(this.rowNum < this.rows.length)
      {
        console.log('Pop Row');
        this.rows.pop();
      }
//    }

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
