import { Component, OnInit, Inject, EventEmitter } from "@angular/core";
import { Album } from "../../../model/Album";
import { MusicSearchService } from "../../services/music-search.service";
import { Subscription, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-music-search",
  templateUrl: "./music-search.component.html",
  styleUrls: ["./music-search.component.scss"]
})
export class MusicSearchComponent implements OnInit {
  
  albums$ = this.service.getAlbums();
  message: string;

  constructor(private service: MusicSearchService) {}

  search(query: string) {
    this.service.search(query);
  }

  ngOnInit() {}
}
