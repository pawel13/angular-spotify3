import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { TabComponent } from "../tab/tab.component";
import { TabsNavComponent } from "../tabs-nav/tabs-nav.component";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"]
})
export class TabsComponent implements OnInit, AfterViewInit {

  @ViewChild(TabsNavComponent, { read: TabsNavComponent })
  navRef: TabsNavComponent;

  tabsList: TabComponent[] = [];

  toggle(active: TabComponent) {
    this.tabsList.forEach(tab => {
      tab.open = active === tab;
    });
  }

  constructor() {}

  ngOnInit() {
    // console.log(this.navRef.tabs = this.tabsList);
  }
  
  ngAfterViewInit() {
    // setTimeout(()=>{
      this.navRef.tabs = this.tabsList
    // })
    // console.log(this.navRef.tabs);
  }
}
