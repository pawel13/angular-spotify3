import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from '../../services/playlists.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map, filter, share } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Playlist } from 'src/app/model/Playlist';

@Component({
  selector: 'app-selected-playlist',
  template: `
    <app-playlist-details [playlist]="playlist$ | async">
    </app-playlist-details>
  `,
  styles: []
})
export class SelectedPlaylistComponent implements OnInit {

  playlist$: Observable<Playlist | undefined>;

  constructor(private service: PlaylistsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.playlist$ = this.route.paramMap.pipe(
      map( paramMap => paramMap.get('id')),
      filter( id => id !== null),
      map(id => parseInt(id!)),
      switchMap( id =>this.service.getPlaylist(id) ),
      //share()
    )
  }

}