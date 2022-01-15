import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe(
      'KFC',
      'A fried chicken',
      'https://singaporelocalfavourites.com/wp-content/uploads/2018/05/hot-and-spicy-chicken-e1598019670219.jpg'
    ),
    new Recipe(
      'KFC',
      'A fried chicken',
      'https://singaporelocalfavourites.com/wp-content/uploads/2018/05/hot-and-spicy-chicken-e1598019670219.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  public onClickNewRecipe() {
    console.log('New recipe added');
  }
}
