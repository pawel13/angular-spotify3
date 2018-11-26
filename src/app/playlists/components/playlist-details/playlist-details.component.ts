import { Component, OnInit, Input } from "@angular/core";
import { Playlist } from "src/app/model/Playlist";

@Component({
  selector: "app-playlist-details",
  templateUrl: "./playlist-details.component.html",
  styleUrls: ["./playlist-details.component.scss"]
})
export class PlaylistDetailsComponent implements OnInit {

  @Input()
  playlist: Playlist

  constructor() {}

  ngOnInit() {}

  mode = "show";

  edit() {
    this.mode = "edit";
  }

  cancel() {
    this.mode = "show";
  }

  save() {
    this.mode = "show";
  }
}
