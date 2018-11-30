import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Playlist } from 'src/app/model/Playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {
  playlists = new BehaviorSubject<Playlist[]>([
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
  ]);

  constructor() { }

  getPlaylists(): Observable<Playlist[]>{
    return this.playlists.asObservable();
  }

  getPlaylist(id: number): Observable<Playlist | undefined> {
    const playlists = this.playlists.getValue();
    const playlist = playlists.find(p => p.id == id);

    return of(playlist);
  }

}
