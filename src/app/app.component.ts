import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = "Hello Angular!";
  counter = 0;

  constructor(private cdr:ChangeDetectorRef) {

    setInterval(() => {
     
        this.counter++;
        cdr.detectChanges()
     
    }, 500);
  }
}
