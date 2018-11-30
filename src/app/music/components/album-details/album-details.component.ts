import { Component, OnInit } from "@angular/core";
import { AlbumsService } from "../../services/albums.service";
import { ActivatedRoute } from "@angular/router";
import { map, filter, switchMap, multicast, refCount, share, shareReplay } from "rxjs/operators";
import { Subject, ConnectableObservable } from "rxjs";
import { Album } from "src/app/model/Album";

@Component({
  selector: "app-album-details",
  templateUrl: "./album-details.component.html",
  styleUrls: ["./album-details.component.scss"]
})
export class AlbumDetailsComponent implements OnInit {

  album$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get("id")),
    filter(id => id !== null),
    switchMap(id => this.service.getAlbum(id!)),
    // multicast(()=>new Subject()),
    // refCount() // auto-connect on first subscriber
    // share() // multicast + ()=>Subject + refCount
    shareReplay() // multicast + ()=>ReplaySubject + refCount
  );

  constructor(
    private route: ActivatedRoute, 
    private service: AlbumsService) {}

  ngOnInit() {
    
    // setInterval(()=>{
    //   (this.album$ as ConnectableObservable<Album>).connect()

    // },3000)


  }
}
