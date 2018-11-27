import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  EventEmitter,
  Output
} from "@angular/core";
import { Playlist } from "src/app/model/Playlist";
import { NgForOf, NgForOfContext } from "@angular/common";

NgForOf;
NgForOfContext;

@Component({
  selector: "app-items-list",
  templateUrl: "./items-list.component.html",
  styleUrls: ["./items-list.component.scss"]
  // encapsulation: ViewEncapsulation.Emulated
  // inputs:[
  //   'playlists:items'
  // ]
})
export class ItemsListComponent implements OnInit {

  hover: Playlist

  @Input("items")
  playlists: Playlist[];

  @Input()
  selected: Playlist;

  @Output()
  selectedChange = new EventEmitter<Playlist>();

  select(playlist: Playlist) {
    this.selectedChange.emit(playlist);
  }

  constructor() {}

  trackFn(index: number, item: Playlist) {
    return item.id;
  }

  ngOnInit() {}
}
