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

  ngOnInit() {
    this.service.getAlbums().subscribe(
      //onNext:
      albums => (this.albums = albums),
      
      //onError:
      error => (this.message = error.message),

      //onComplete:
      () => console.log("complete")
    );
  }
}
