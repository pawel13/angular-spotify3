import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormArray,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"]
})
export class SearchFormComponent implements OnInit {
  queryForm: FormGroup;

  constructor() {
    this.queryForm = new FormGroup({
      query: new FormControl("batman"),
      options: new FormGroup({
        type: new FormControl("album"),
        markets: new FormArray([
          new FormGroup({
            name: new FormControl("PL")
          }),
          new FormGroup({
            name: new FormControl("GB")
          })
        ])
      })
    });

    console.log(this.queryForm);
  }

  addMarket(){
    const markets = this.queryForm.get(['options','markets']) as FormArray

    markets.push( new FormGroup({
      name: new FormControl("")
    }))
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
