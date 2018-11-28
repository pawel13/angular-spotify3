import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MusicRoutingModule } from "./music-routing.module";
import { MusicSearchComponent } from "./components/music-search/music-search.component";
import { SearchFormComponent } from "./components/search-form/search-form.component";
import { AlbumsGridComponent } from "./components/albums-grid/albums-grid.component";
import { AlbumCardComponent } from "./components/album-card/album-card.component";
import { environment } from "../../environments/environment";
import { SEARCH_URL } from "./services/music-search.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    MusicSearchComponent,
    SearchFormComponent,
    AlbumsGridComponent,
    AlbumCardComponent
  ],
  imports: [CommonModule, MusicRoutingModule, HttpClientModule],
  exports: [MusicSearchComponent],
  providers: [
    {
      provide: SEARCH_URL,
      useValue: environment.api_url
    }
    // {
    //   provide: MusicSearchService,
    //   useFactory: (url: string) => {
    //     return new MusicSearchService(url);
    //   },
    //   deps: [SEARCH_URL]
    // },
    // {
    //   provide: AbstractSearchService,
    //   useClass: MusicSearchService,
    //   // deps: [SEARCH_URL]
    // },
    // MusicSearchService
  ]
})
export class MusicModule {}
