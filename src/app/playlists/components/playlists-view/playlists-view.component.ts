import { Component, OnInit } from "@angular/core";
import { Playlist } from "src/app/model/Playlist";

@Component({
  selector: "app-playlists-view",
  templateUrl: "./playlists-view.component.html",
  styleUrls: ["./playlists-view.component.scss"]
})
export class PlaylistsViewComponent implements OnInit {
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
    }
  ];

  selected: Playlist = this.playlists[1];

  constructor() {}

  ngOnInit() {}

  save(draft: Playlist) {
    const index = this.playlists.findIndex(
      p => p.id === draft.id
    );

    if (index === -1) {
      return;
    }

    this.playlists.splice(index, 1, draft);
    this.selected = draft;
  }
}
