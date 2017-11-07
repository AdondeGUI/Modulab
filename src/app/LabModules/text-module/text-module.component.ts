import { Component, OnInit, Input } from '@angular/core';
import { TextData } from '../../domain/models/text-data';

@Component({
  selector: 'text-module',
  templateUrl: './text-module.component.html',
  styleUrls: ['./text-module.component.css']
})

export class TextModuleComponent {

  private newTextData = new TextData();

  constructor() {
  }

}
