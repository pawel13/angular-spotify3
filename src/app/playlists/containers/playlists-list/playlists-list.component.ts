import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from '../../services/playlists.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Playlist } from 'src/app/model/Playlist';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-playlists-list',
  template: `
    <app-items-list 
    [items]="playlists$ | async" 
    [selected]="selected$ | async" 
    (selectedChange)="select($event)">
    </app-items-list>
  `,
  styles: []
})
export class PlaylistsListComponent implements OnInit {

  playlists$ = this.service.getPlaylists();

  selected$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('id')),
    map(id => parseInt(id!)),
    switchMap(id => this.service.getPlaylist(id))
  );

  constructor(private route: ActivatedRoute, private service: PlaylistsService, private router: Router) { }

  select(playlist: Playlist) {
    this.router.navigate(['/playlists', playlist.id])

  }

  ngOnInit() {
  }

}