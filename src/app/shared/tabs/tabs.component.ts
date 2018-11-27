import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ContentChild,
  ContentChildren,
  QueryList
} from "@angular/core";
import { TabComponent } from "../tab/tab.component";
import { TabsNavComponent } from "../tabs-nav/tabs-nav.component";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"]
})
export class TabsComponent implements OnInit, AfterViewInit {
  @ContentChild(TabsNavComponent, { read: TabsNavComponent })
  navRef: TabsNavComponent;

  @ContentChildren(TabComponent)
  tabsList: QueryList<TabComponent>;

  toggle(active: TabComponent) {
    this.tabsList.forEach(tab => {
      tab.open = active === tab;
    });
  }

  constructor() {}

  ngOnInit() {}

  subs = new Map();

  ngAfterContentInit() {
    this.tabsList.changes.subscribe(change => {
      const items =  this.tabsList.toArray()
      Array.from(this.subs.entries()).forEach(([tab,sub])=>{
          if(!items.includes(tab)){
            sub.unsubscribe()
            this.subs.delete(tab)
          }
      })
    });

    this.tabsList.forEach(tab => {
      this.subs.set(tab, tab.openChange.subscribe(() => {
        this.toggle(tab);
      }))
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.navRef.tabs = this.tabsList;
    });
    console.log(this.tabsList);
  }
}
