import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      ["Pasta", "Creamy", "Comfort"],
      "This is simply a test",
      "https://cdn.apartmenttherapy.info/image/upload/v1567541461/k/Photo/Recipes/2019-09-how-to-shrimp-alfredo/HT-Shrimp-Alfredo_103.jpg"
    ),
    new Recipe(
      "Chicken Tetrazinni",
      ["Pasta", "Creamy", "Comfort"],
      `Tetrazzini is an American dish made with diced poultry or seafood and
      mushroom in a butter/cream and cheese sauce flavored with wine or sherry.`,
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/12/10/0/EI1C07_Chicken-Tetrazzini_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539596721.jpeg"
    ),
    new Recipe(
      "Test Recipe 2",
      ["Pasta", "Creamy", "Comfort"],
      "This is simply a test",
      "https://cdn.apartmenttherapy.info/image/upload/v1567541461/k/Photo/Recipes/2019-09-how-to-shrimp-alfredo/HT-Shrimp-Alfredo_103.jpg"
    )
  ];
  constructor() {}

  ngOnInit() {
    this.smBreakpoint = window.innerWidth <= 580;
    this.mdBreakpoint = window.innerWidth <= 700;
    this.lgBreakpoint = window.innerWidth <= 900;
    this.getGridSize();
  }

  getGridSize() {
    if (this.smBreakpoint) {
      this.gridColumns = 1;
      this.gridRowHeight = "450px";
    } else if (this.mdBreakpoint) {
      this.gridColumns = 2;
      this.gridRowHeight = "600px";
    } else if (this.lgBreakpoint) {
      this.gridColumns = 3;
    }
  }

  onResize(event) {
    this.smBreakpoint = event.target.innerWidth <= 580;
    this.mdBreakpoint = event.target.innerWidth <= 700;
    this.lgBreakpoint = event.target.innerWidth <= 900;
    this.getGridSize();
  }
}
