import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistsViewComponent } from '../components/playlists-view/playlists-view.component';
import { SelectedPlaylistComponent } from '../containers/selected-playlist/selected-playlist.component';

const routes: Routes = [
  {
    path: "playlists",
    component: PlaylistsViewComponent
  },
  {
    path: "playlists/:id",
    component: PlaylistsViewComponent,
    children: [
      {
        path: "",
        component: SelectedPlaylistComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistsRoutingModule { }
