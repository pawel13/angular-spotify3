import { Component, OnInit, Inject } from "@angular/core";
import { Album } from "../../../model/Album";
import { MusicSearchService } from "../../services/music-search.service";

@Component({
  selector: "app-music-search",
  templateUrl: "./music-search.component.html",
  styleUrls: ["./music-search.component.scss"]
})
export class MusicSearchComponent implements OnInit {
  albums: Album[];
  message: string;

  constructor(private service: MusicSearchService) {}

  search(query: string) {
    
    this.service.getAlbums(query).subscribe(
      albums => (this.albums = albums),

      error => (this.message = error.message)
    );
  }

  ngOnInit() {}
}
