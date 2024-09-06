import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from './models/MenuItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = "Chirpus Pizza"
  menu : MenuItem[] = [
    {name: "Classic Cheese", category: "Pizza", price: 6, vegetarian: true, soldOut: false},
    {name: "Chicago Deep Dish", category: "Pizza", price: 8, vegetarian: true, soldOut: true},
    {name: "Breadsticks", category: "Appetizers", price: 4, vegetarian: true, soldOut: true},
    {name: "Pepperoni", category: "Pizza", price: 6, vegetarian: false, soldOut: false},
    {name: "Hot Pretzels", category: "Appetizers", price: 3, vegetarian: true, soldOut: false},
    {name: "Italian Sausage", category: "Toppings", price: 1, vegetarian: false, soldOut: false},
    {name: "Pineapple", category: "Toppings", price: .75, vegetarian: true, soldOut: true},
    {name: "Jalapenos", category: "Toppings", price: .75, vegetarian: true, soldOut: false},
    {name: "Extra Cheese", category: "Toppings", price: 1.5, vegetarian: true, soldOut: false},
    {name: "Chicken Nuggets", category: "Appetizers", price: 5, vegetarian: false, soldOut: false},
    {name: "Meat Lover's", category: "Pizza", price: 10, vegetarian: false, soldOut: false},
    {name: "Poutine", category: "Appetizers", price: 5, vegetarian: false, soldOut: true}
  ];
  orderedItems : number = 0;
  orderedTotal : number = 0;

  addItem(item: MenuItem) {
    this.orderedItems++;
    this.orderedTotal += item.price;
  }
}
