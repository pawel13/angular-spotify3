import { Injectable, Inject, InjectionToken } from "@angular/core";
import { Album, AlbumsResponse } from "../../model/Album";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { AuthService } from "../../security/auth.service";

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
    private http: HttpClient,
    private auth: AuthService
  ) {}

  getAlbums() {
    return this.http
      .get<AlbumsResponse>(this.search_url, {
        headers: {
          Authorization: "Bearer " + this.auth.getToken()
        },
        params: {
          type: "album",
          q: "batman"
        }
      })
      .pipe(
        // pluck<AlbumsResponse,Album[]>("albums", "items")
        map(resp => resp.albums.items),
        catchError((err, caught) => {
          // return of([])
          // return caught // retry original observable
          // return []
          // return empty()

          if(err instanceof HttpErrorResponse && err.status == 401){
            this.auth.authorize()
          }

          return throwError(new Error(err.error.error.message));
        })
      );
  }
}

import { Observable, of, empty, throwError } from "rxjs";
import { map, pluck, catchError } from "rxjs/operators";
