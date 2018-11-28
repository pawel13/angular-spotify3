import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormArray,
  AbstractControl,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"]
})
export class SearchFormComponent implements OnInit {
  queryForm: FormGroup;

  constructor(private bob: FormBuilder) {
    this.queryForm = this.bob.group({
      query: ["batman"],
      
      options: this.bob.group({
        type: ["album"],
        markets: this.bob.array([
          this.bob.group({
            name: ["PL"]
          }),
          this.bob.group({
            name: ["GB"]
          })
        ])
      })
    });

    console.log(this.queryForm);
  }

  addMarket() {
    const markets = this.queryForm.get(["options", "markets"]) as FormArray;

    markets.push(
      this.bob.group({
        name: new FormControl("")
      })
    );
  }

  getMarkets() {
    return (this.queryForm.get("options.markets") as FormArray).controls;
  }

  ngOnInit() {}

  @Output()
  queryChange = new EventEmitter<string>();

  search(query: string) {
    this.queryChange.emit(query);
  }
}
