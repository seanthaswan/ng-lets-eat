import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatDividerModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { RecipeComponent } from "./Recipe/recipe.component";
import { ShoppingComponent } from "./Shopping/shopping.component";
import { ShoppingListComponent } from "./Shopping/shopping-list/shopping-list.component";
import { ShoppingListEditComponent } from "./Shopping/shopping-list-edit/shopping-list-edit.component";
import { RecipeListComponent } from "./Recipe/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./Recipe/recipe-item/recipe-item.component";
import { RecipeItemDetailComponent } from "./Recipe/recipe-item-detail/recipe-item-detail.component";

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
    RecipeItemDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
