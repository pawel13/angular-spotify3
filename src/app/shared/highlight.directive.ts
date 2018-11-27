import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  OnDestroy,
  SimpleChanges,
  Renderer2,
  HostBinding,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[appHighlight]"
  // host: {
  //   "[style.color]": "color",
  //   "(mouseenter)":"activate($event)"
  // }
})
//implements OnInit, OnChanges, DoCheck, OnDestroy
export class HighlightDirective {
  @Input("appHighlight")
  // @HostBinding("style.color")
  color: string;

  constructor(
    private elem: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  @HostListener("mouseenter", ['$event.x','$event.y'])
  activate(x:number,y:number) {
    this.renderer.setStyle(this.elem.nativeElement, "color", this.color);
    
  }
  
  @HostListener("mouseenter")
  deactivate() {
    this.renderer.setStyle(this.elem.nativeElement, "color", '');

  }

  /* 
  ngOnInit() {
    console.log("ngOnInit!");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", changes);
    // this.elem.nativeElement.style.color = this.color;
    this.renderer.setStyle(this.elem.nativeElement, "color", this.color);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  } */
}
