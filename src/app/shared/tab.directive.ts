import { Directive, TemplateRef, Input } from "@angular/core";

@Directive({
  selector: "[appTab]"
})
export class TabDirective {
  @Input('appTab')
  title: string;

  constructor(public tpl: TemplateRef<any>) {}
}
