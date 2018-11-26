import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Playlist } from "src/app/model/Playlist";

@Component({
  selector: "app-items-list",
  templateUrl: "./items-list.component.html",
  styleUrls: ["./items-list.component.scss"]
  // encapsulation: ViewEncapsulation.Emulated
})
export class ItemsListComponent implements OnInit {

  playlists: Playlist[] = [
    {
      id: 123,
      name: "Angular Hits",
      favourite: true,
      color: "#ff00ff"
    },
    {
      id: 234,
      name: "Angular TOP20",
      favourite: false,
      color: "#00ffff"
    },
    {
      id: 345,
      name: "Best of Angular",
      favourite: false,
      color: "#ffff00"
    },
  ];


  constructor() {}

  ngOnInit() {}
}
