import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Playlist } from 'src/app/model/Playlist';
import { PlaylistsService } from '../services/playlists.service';
import { Observable } from 'rxjs';
import { tap, switchMapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaylistResolverService implements Resolve<Playlist | undefined> {
 

  constructor(private service: PlaylistsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Playlist | undefined> {
    const param = route.paramMap.get('id');
    const id = parseInt(param!);

    return this.service.getPlaylist(id).pipe(
      tap(playlist => this.service.selectPlaylist(playlist!))
    )

  }
}
