import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input()
  title:string

  @HostBinding('class.card')
  cokolwiek = true

  open = false

  toggle(){
    this.open = !this.open
  }

  constructor() { }

  ngOnInit() {
  }

}
