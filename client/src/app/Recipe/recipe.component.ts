import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.scss"]
})
export class RecipeComponent implements OnInit {
  isRecipeDetailOpen: boolean;
  isRecipeEditOpen: boolean;

  constructor() {
    this.isRecipeDetailOpen = true;
    this.isRecipeEditOpen = true;
  }

  ngOnInit() {}
}
