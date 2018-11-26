import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Hello Angular!";

  data = {
    message: "PLacki",
    getMessage(greet) {
      return greet + this.message;
    }
  };

  alert(m){
    /* window. */alert(m)
  }
}
