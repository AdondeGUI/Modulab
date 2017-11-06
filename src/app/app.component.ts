import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html', styleUrls: [ 'app.component.css' ]
})

export class AppComponent {

  private newModule : string = "";
  @Input()
  public modules : string [] = [];

  private addModule() {
      this.modules.push(this.newModule);
  }
}
