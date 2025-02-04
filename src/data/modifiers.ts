import { Modifier } from '../types';
import { wineModifiers } from './wineModifiers';
import { steakModifiers } from './steakModifiers';
import { pizzaModifiers } from './pizzaModifiers';
import { pastaModifiers } from './pastaModifiers';
import { seafoodModifiers } from './seafoodModifiers';
import { coffeeModifiers } from './coffeeModifiers';
import { teaModifiers } from './teaModifiers';

export const baseModifiers: Modifier[] = [
  { id: '1', name: 'Extra Sauce', price: 1.50, applicableCategories: ['1', '2', '6', '7'] },
  { id: '2', name: 'Add Cheese', price: 2.00, applicableCategories: ['1', '2', '6', '7', '9'] },
  { id: '3', name: 'Make it Spicy', price: 0.50, applicableCategories: ['1', '2', '6', '7', '8'] },
  { id: '4', name: 'Extra Shot Espresso', price: 1.00, applicableCategories: ['4'] },
  { id: '5', name: 'Whipped Cream', price: 0.75, applicableCategories: ['3', '4'] },
  { id: '6', name: 'Gluten Free', price: 2.50, applicableCategories: ['1', '2', '3', '6', '7'] },
  { id: '7', name: 'Extra Vegetables', price: 1.50, applicableCategories: ['1', '2', '5', '6', '7', '8', '9'] },
  { id: '8', name: 'Add Chicken', price: 4.00, applicableCategories: ['5', '6'] },
  { id: '9', name: 'Add Shrimp', price: 6.00, applicableCategories: ['5', '6'] },
  { id: '10', name: 'Kids Portion', price: -3.00, applicableCategories: ['10'] }
];

export const modifiers = [
  ...baseModifiers,
  ...wineModifiers,
  ...steakModifiers,
  ...pizzaModifiers,
  ...pastaModifiers,
  ...seafoodModifiers,
  ...coffeeModifiers,
  ...teaModifiers
];
