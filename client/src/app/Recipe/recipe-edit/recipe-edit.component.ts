import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.scss"]
})
export class RecipeEditComponent implements OnInit {
  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(
      form.value.recipeTags.split(",").map(function(item) {
        return item.trim();
      })
    );
  }

  constructor() {}

  ngOnInit() {}
}
