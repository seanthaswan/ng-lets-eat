import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatIconRegistry } from "@angular/material";

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.scss"]
})
export class ShoppingListEditComponent implements OnInit {
  ingredientForm: FormGroup;

  constructor() {
    this.ingredientForm = new FormGroup({
      ingredientName: new FormControl(),
      ingredientQuantity: new FormControl(),
      ingredientUnit: new FormControl()
    });
  }

  ngOnInit() {}
}
