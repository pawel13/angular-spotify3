import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from '../../services/playlists.service';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { switchMap, map, filter, share, pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Playlist } from 'src/app/model/Playlist';

@Component({
  selector: 'app-selected-playlist',
  template: `
    <app-playlist-details [playlist]="playlist$ | async" (playlistChange)="save($event)">
    </app-playlist-details>
  `,
  styles: []
})
export class SelectedPlaylistComponent implements OnInit {

  playlist$: Observable<Playlist | undefined> = this.route.data.pipe(
    pluck<Data, Playlist>('playlist')
  )


  constructor(private service: PlaylistsService, private route: ActivatedRoute, private router: Router) { }

/*   loadPlaylist() {
    this.playlist$ = this.route.paramMap.pipe(
      map(paramMap => paramMap.get('id')),
      filter(id => id !== null),
      map(id => parseInt(id!)),
      switchMap(id => this.service.getPlaylist(id)),
      //share()
    ) 
    }*/

  ngOnInit() {
    // this.loadPlaylist();
    
  }

  save(playlist: Playlist) {
    this.service.save(playlist);
/*     this.router.navigate(['/playlists']);
    // load playlist again
    this.loadPlaylist(); */


  }

}
