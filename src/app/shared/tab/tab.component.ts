import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { TabsComponent } from "../tabs/tabs.component";

@Component({
  selector: "app-tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.scss"]
})
export class TabComponent implements OnInit {
  
  @Input()
  title: string;

  @HostBinding("class.card")
  cokolwiek = true;

  open = false;

  toggle() {
    this.tabs.toggle(this)
  }

  constructor(private tabs: TabsComponent) {
    tabs.tabsList.push(this);
    // console.log(tabs)
  }

  ngOnInit() {}
}
