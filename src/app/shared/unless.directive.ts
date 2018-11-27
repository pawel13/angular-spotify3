import { Directive, TemplateRef,ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { PlaylistsViewComponent } from '../playlists/components/playlists-view/playlists-view.component';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor(
    private tpl:TemplateRef<any>,
    private vcr:ViewContainerRef,
    private fr: ComponentFactoryResolver
  ) {

    const factory = fr.resolveComponentFactory(PlaylistsViewComponent)

    const cr = vcr.createComponent(factory,0)

    cr.instance.selected = cr.instance.playlists[2]
    
  }

}
