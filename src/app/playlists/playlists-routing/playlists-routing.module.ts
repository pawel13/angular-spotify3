import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistsViewComponent } from '../components/playlists-view/playlists-view.component';
import { SelectedPlaylistComponent } from '../containers/selected-playlist/selected-playlist.component';
import { PlaylistsListComponent } from '../containers/playlists-list/playlists-list.component';
import { MessageComponent } from '../components/message/message.component';

const routes: Routes = [
  {
    path: "playlists",
    component: PlaylistsViewComponent,
    children: [
      // without id, list of playlists
      {
        path: "",
        children: [{
          path: "",
          component: PlaylistsListComponent,
          outlet: "list"
        },
        /* {
          path: "",
          component: MessageComponent,
          data: {
            message: 'Please select playlist'
          }
        } */

        ]
      },
      // concrete playlist
      {
        path: ":id",
        children: [
          {
            path: '',
            component: PlaylistsListComponent,
            outlet: 'list'
          },
          {
            path: '',
            component: SelectedPlaylistComponent
          }
        ]

      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistsRoutingModule { }
