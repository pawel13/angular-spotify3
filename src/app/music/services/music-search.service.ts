import { Injectable, Inject, InjectionToken } from "@angular/core";
import { Album } from "../../model/Album";
import { HttpClient } from "@angular/common/http";

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


    const request = this.http.get(this.search_url,{
      headers:{

      },
      params:{

      },
      // observe:'response',
      // reportProgress:false,
      // responseType:'arraybuffer',
    })

    request.subscribe(resp => console.log(resp))
    request.subscribe(resp => console.log(resp))
    request.subscribe(resp => console.log(resp))

    console.log('jestem tutaj!!')

    return this.albums;
  }
}
