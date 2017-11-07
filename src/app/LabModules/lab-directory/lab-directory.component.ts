import { Component, OnInit, Input } from '@angular/core';
import { Folder } from '../../domain/index';

@Component({
  selector: 'lab-directory',
  templateUrl: 'lab-directory.component.html',
  styleUrls: [ 'lab-directory.component.css' ]
})

export class labDirectoryComponent {
  private newFile = "";

  @Input()
  public files : string[] = [];

  constructor() {
    this.files = ["File 1", "File 2"];
  }

  private addFile() {
    this.files.push(this.newFile);
    this.newFile = "";
  }
}