import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlaylistsViewComponent } from "./playlists/components/playlists-view/playlists-view.component";
import { MusicSearchComponent } from "./music/components/music-search/music-search.component";
import { AlbumDetailsComponent } from "./music/components/album-details/album-details.component";
import { SelectedPlaylistComponent } from "./playlists/containers/selected-playlist/selected-playlist.component";

const routes: Routes = [
  {
    path: "",
    // component: HomeComponent,
    redirectTo: "playlists",
    pathMatch: "full"
  },
  {
    path: "playlists",
    component: PlaylistsViewComponent
  },
  {
    path: 'music',
    loadChildren: './music/music.module#MusicModule'
  },
  {
    path: "**",
    // component: PageNotFoundComponent,
    redirectTo: "playlists",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true
      // useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
