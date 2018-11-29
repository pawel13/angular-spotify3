import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormArray,
  AbstractControl,
  FormBuilder,
  Validators,
  ValidatorFn,
  Validator,
  ValidationErrors
} from "@angular/forms";
import { distinctUntilChanged, filter, debounceTime } from "rxjs/operators";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"]
})
export class SearchFormComponent implements OnInit {
  queryForm: FormGroup;

  constructor() {

    const censor = (badword: string): ValidatorFn =>
      //
      (control: AbstractControl): ValidationErrors | null => {
        //
        const hasError = (control.value as string).includes(badword);

        return hasError
          ? {
              censor: { badword }
            }
          : null;
      };

    this.queryForm = new FormGroup({
      query: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        censor("batman")
      ])
    });

    (window as any)["form"] = this.queryForm;
    console.log(this.queryForm);

    this.queryForm
      .get("query")!
      .valueChanges.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        filter(query => query.length >= 3)
      )
      .subscribe(query => {
        this.search(query);
      });
  }

  ngOnInit() {}

  @Output()
  queryChange = new EventEmitter<string>();

  search(query: string) {
    this.queryChange.emit(query);
  }
}
