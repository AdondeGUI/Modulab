import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'image-module',
  templateUrl: './image-module.component.html',
  styleUrls: ['./image-module.component.css']
})

export class ImageModuleComponent implements OnInit {
  
    url:string = "";
    picURLs: string[] = [];
  
    readUrl(event:any) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
      
        reader.onload = (event:any) => {
          this.url = event.target.result;
          this.picURLs.push(this.url);
        }
      
        reader.readAsDataURL(event.target.files[0]);
      }
    }
  
    constructor() { }
  
    ngOnInit() {
    }
  
  }