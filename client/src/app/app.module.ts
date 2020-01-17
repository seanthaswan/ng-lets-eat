import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatSelectModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatDividerModule,
  MatMenuModule,
  MatGridListModule,
  MatChipsModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { FormsModule, ReactiveFormsModule, FormControl } from "@angular/forms";
import { RecipeComponent } from "./Recipe/recipe.component";
import { ShoppingComponent } from "./Shopping/shopping.component";
import { ShoppingListComponent } from "./Shopping/shopping-list/shopping-list.component";
import { ShoppingListEditComponent } from "./Shopping/shopping-list-edit/shopping-list-edit.component";
import { RecipeListComponent } from "./Recipe/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./Recipe/recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "./Recipe/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./Recipe/recipe-edit/recipe-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipeComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatMenuModule,
    MatGridListModule,
    MatChipsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
