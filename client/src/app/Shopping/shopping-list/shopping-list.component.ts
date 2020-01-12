import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../ingredient.model";
@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Chicken", 1, "Half"),
    new Ingredient("Butter (Unsalted)", 1, "Stick"),
    new Ingredient("Parsley", 1, "Bunch"),
    new Ingredient("Salt", 1, "Pinch")
  ];
  constructor() {}

  ngOnInit() {}
}
