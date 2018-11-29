import {
  Injectable,
  Inject,
  InjectionToken,
  EventEmitter
} from "@angular/core";
import { AlbumsResponse, Album } from "../../model/Album";
import { HttpClient } from "@angular/common/http";
import { map, concat, startWith } from "rxjs/operators";
import { of, Subject } from "rxjs";

export const SEARCH_URL = new InjectionToken("Search API Url");

@Injectable({
  providedIn: "root"
})
export class MusicSearchService {
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
      .subscribe(albums => {
        this.albums = albums;
        this.albumsChange.next(albums);
      });
  }

  albums: Album[] = [];
  albumsChange = new Subject<Album[]>();

  getAlbums() {
    // return this.albumsChange.asObservable();
    // return of(this.albums).pipe(
    //   concat(this.albumsChange)
    // );
    return this.albumsChange.pipe(
      startWith(this.albums)
    )
  }
}
