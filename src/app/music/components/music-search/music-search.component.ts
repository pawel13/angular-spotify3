import { Component, OnInit, Inject, EventEmitter } from "@angular/core";
import { Album } from "../../../model/Album";
import { MusicSearchService } from "../../services/music-search.service";
import { Subscription, Subject } from "rxjs";
import { takeUntil, tap, catchError } from "rxjs/operators";

@Component({
  selector: "app-music-search",
  templateUrl: "./music-search.component.html",
  styleUrls: ["./music-search.component.scss"]
})
export class MusicSearchComponent implements OnInit {
  albums: Album[];

  albums$ = this.service.getAlbums().pipe(
    tap(albums => {
      this.albums = albums;
    }),
    catchError(error => (this.message = error.message))
  );

  message: string;

  constructor(private service: MusicSearchService) {}

  search(query: string) {
    this.service.search(query);
  }

  ngOnInit() {}
}
