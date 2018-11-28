import { Component, OnInit } from '@angular/core';
import { Album } from '../../../model/Album';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.scss']
})
export class MusicSearchComponent implements OnInit {

  albums:Album[] = [
    {
      id:'123',
      name:'Album TEstowy',
      images:[
        {
          url:'http://placekitten.com/300/300'
        }
      ]
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
