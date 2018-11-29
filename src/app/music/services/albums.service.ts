import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from 'src/app/model/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http:HttpClient) { }

  getAlbum(id:string){
    return this.http.get<Album>(`https://api.spotify.com/v1/albums/${id}`)
  }
}
