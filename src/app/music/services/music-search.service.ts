import { Injectable, Inject, InjectionToken } from "@angular/core";
import { Album } from "../../model/Album";

export const SEARCH_URL = new InjectionToken('Search API Url')

@Injectable({
  providedIn: "root"
})
export class MusicSearchService {
  albums: Album[] = [
    {
      id: "123",
      name: "Album TEstowy",
      images: [
        {
          url: "http://placekitten.com/300/300"
        }
      ]
    }
  ];

  constructor(
    @Inject(SEARCH_URL) private search_url: string
  ) {}

  getAlbums() {}
}
