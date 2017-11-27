import { Component, OnInit, Input } from '@angular/core';
import { Module } from '../../domain/models/module';

@Component({
  selector: 'text-module',
  templateUrl: './text-module.component.html',
  styleUrls: ['./text-module.component.css']
})

export class TextModuleComponent {


  @Input()
  public module : Module;

  constructor() {
  }

}
