import { Injectable, Inject } from "@angular/core";
import { Album } from "../../model/Album";

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
    @Inject("SEARCH_API_URL") private search_url: string
  ) {}

  getAlbums() {}
}
