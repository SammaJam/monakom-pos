import { Modifier } from '../types';

export const wineModifiers: Modifier[] = [
  {
    id: 'wine-1',
    name: 'Small Glass (5 oz)',
    price: -3.00,
    applicableCategories: ['4']
  },
  {
    id: 'wine-2',
    name: 'Regular Glass (6 oz)',
    price: 0,
    applicableCategories: ['4']
  },
  {
    id: 'wine-3',
    name: 'Large Glass (9 oz)',
    price: 4.00,
    applicableCategories: ['4']
  }
];
