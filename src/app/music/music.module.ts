import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicSearchComponent } from './components/music-search/music-search.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { AlbumsGridComponent } from './components/albums-grid/albums-grid.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';

@NgModule({
  declarations: [MusicSearchComponent, SearchFormComponent, AlbumsGridComponent, AlbumCardComponent],
  imports: [
    CommonModule,
    MusicRoutingModule
  ],
  exports: [MusicSearchComponent]
})
export class MusicModule { }
