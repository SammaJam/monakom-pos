import { Category, MenuItem, Modifier } from '../types';
import { wineModifiers } from './wineModifiers';
import { steakModifiers } from './steakModifiers';

export const categories: Category[] = [
  { id: '1', name: 'Starters', icon: 'Soup' },
  { id: '2', name: 'Main Course', icon: 'UtensilsCrossed' },
  { id: '3', name: 'Desserts', icon: 'Cake' },
  { id: '4', name: 'Drinks', icon: 'Wine' },
];

export const modifiers: Modifier[] = [
  { id: '1', name: 'Extra Sauce', price: 1.50, applicableCategories: ['1', '2'] },
  { id: '2', name: 'Add Cheese', price: 2.00, applicableCategories: ['1', '2'] },
  { id: '3', name: 'Make it Spicy', price: 0.50, applicableCategories: ['1', '2'] },
  { id: '4', name: 'Extra Shot Espresso', price: 1.00, applicableCategories: ['4'] },
  { id: '5', name: 'Whipped Cream', price: 0.75, applicableCategories: ['3', '4'] },
  { id: '6', name: 'Gluten Free', price: 2.50, applicableCategories: ['1', '2', '3'] },
  ...wineModifiers,
  ...steakModifiers
];

export const menuItems: MenuItem[] = [
  { 
    id: '1', 
    name: 'Caesar Salad', 
    price: 12.99, 
    category: '1', 
    description: 'Fresh romaine lettuce with classic caesar dressing',
    availableModifiers: ['2', '3', '6']
  },
  { 
    id: '2', 
    name: 'Tomato Soup', 
    price: 8.99, 
    category: '1', 
    description: 'Creamy tomato basil soup',
    availableModifiers: ['1', '2', '3', '6']
  },
  { 
    id: '3', 
    name: 'Grilled Salmon', 
    price: 28.99, 
    category: '2', 
    description: 'Fresh Atlantic salmon with seasonal vegetables',
    availableModifiers: ['1', '3', '6']
  },
  { 
    id: '4', 
    name: 'Ribeye Steak', 
    price: 34.99, 
    category: '2', 
    description: '12oz prime ribeye with garlic butter',
    availableModifiers: ['steak-1', 'steak-2', 'steak-3']
  },
  { 
    id: '5', 
    name: 'Chocolate Cake', 
    price: 9.99, 
    category: '3', 
    description: 'Rich chocolate layer cake',
    availableModifiers: ['5', '6']
  },
  { 
    id: '6', 
    name: 'House Wine', 
    price: 12.99, 
    category: '4', 
    description: 'Red or white wine (6 oz glass)',
    availableModifiers: ['wine-1', 'wine-2', 'wine-3']
  },
];
