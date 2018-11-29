import { Injectable, Inject, InjectionToken, EventEmitter } from "@angular/core";
import { AlbumsResponse, Album } from '../../model/Album';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { of } from "rxjs";

export const SEARCH_URL = new InjectionToken("Search API Url");

@Injectable({
  providedIn: "root"
})
export class MusicSearchService {
  // albums: Album[] = [];

  constructor(
    @Inject(SEARCH_URL) private search_url: string,
    private http: HttpClient
  ) {}

  search(query: string): any {

    this.http
      .get<AlbumsResponse>(this.search_url, {
        params: {
          type: "album",
          q: query
        }
      })
      .pipe(map(resp => resp.albums.items))
      .subscribe( albums => {
        this.albumsChange.emit(albums)
      })
  }
  
  albumsChange = new EventEmitter<Album[]>()

  getAlbums() {
    return this.albumsChange.asObservable()
  }
}
