import { Modifier } from '../types';

export const pizzaModifiers: Modifier[] = [
  { id: 'pizza-1', name: 'Extra Cheese', price: 2.50, applicableCategories: ['7'] },
  { id: 'pizza-2', name: 'Thin Crust', price: 0, applicableCategories: ['7'] },
  { id: 'pizza-3', name: 'Thick Crust', price: 0, applicableCategories: ['7'] },
  { id: 'pizza-4', name: 'Add Pepperoni', price: 2.00, applicableCategories: ['7'] },
  { id: 'pizza-5', name: 'Add Mushrooms', price: 1.50, applicableCategories: ['7'] }
];