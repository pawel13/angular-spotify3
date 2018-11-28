import { Injectable } from "@angular/core";
import { Album } from "../../model/Album";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class MusicSearchService {

  api_url = environment.api_url

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

  constructor() {}

  getAlbums() {}
}
