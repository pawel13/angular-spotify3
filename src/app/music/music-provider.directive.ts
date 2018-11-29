import { Directive } from '@angular/core';
import { MusicSearchService } from './services/music-search.service';

@Directive({
  selector: '[appMusicProvider]',
  providers:[MusicSearchService]
})
export class MusicProviderDirective {

  constructor() { }

}
