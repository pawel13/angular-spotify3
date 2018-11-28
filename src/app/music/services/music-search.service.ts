import { Injectable, Inject, InjectionToken } from "@angular/core";
import { AlbumsResponse } from "../../model/Album";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

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

  getAlbums(query = "batman") {
    return this.http
      .get<AlbumsResponse>(this.search_url, {
        params: {
          type: "album",
          q: query
        }
      })
      .pipe(map(resp => resp.albums.items));
  }
}
