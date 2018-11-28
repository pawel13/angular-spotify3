import { Injectable, Inject, InjectionToken } from "@angular/core";
import { Album, AlbumsResponse } from "../../model/Album";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { AuthService } from "../../security/auth.service";
import { map } from "rxjs/operators";

export const SEARCH_URL = new InjectionToken("Search API Url");

@Injectable({
  providedIn: "root"
})
export class MusicSearchService {
  albums: Album[] = [
    {
      id: "123",
      name: "Album z serwisu!",
      images: [
        {
          url: "http://placekitten.com/300/300"
        }
      ]
    }
  ];

  constructor(
    @Inject(SEARCH_URL) private search_url: string,
    private http: HttpClient
  ) {}

  getAlbums() {
    return this.http
      .get<AlbumsResponse>(this.search_url, {
        params: {
          type: "album",
          q: "batman"
        }
      })
      .pipe(
        map(resp => resp.albums.items),
      );
  }
}

