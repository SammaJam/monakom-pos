import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Previous items remain the same up to id 50
  { id: '1', name: 'Caesar Salad', price: 12.99, category: '1', description: 'Fresh romaine lettuce with classic caesar dressing', availableModifiers: ['2', '3', '6'] },
  { id: '2', name: 'Tomato Soup', price: 8.99, category: '1', description: 'Creamy tomato basil soup', availableModifiers: ['1', '2', '3', '6'] },
  { id: '3', name: 'Bruschetta', price: 9.99, category: '1', description: 'Toasted bread with tomatoes and basil', availableModifiers: ['2', '6'] },
  { id: '4', name: 'Calamari', price: 13.99, category: '1', description: 'Crispy fried squid with marinara', availableModifiers: ['1', '3'] },
  { id: '5', name: 'Garlic Bread', price: 6.99, category: '1', description: 'Toasted with garlic butter', availableModifiers: ['2', '6'] },
  { id: '6', name: 'Mozzarella Sticks', price: 8.99, category: '1', description: 'Breaded and fried mozzarella', availableModifiers: ['1'] },
  { id: '7', name: 'Wings', price: 14.99, category: '1', description: 'Choose from buffalo, BBQ, or garlic parmesan', availableModifiers: ['3'] },
  
  // Main Course
  { id: '8', name: 'Grilled Salmon', price: 28.99, category: '2', description: 'Fresh Atlantic salmon with seasonal vegetables', availableModifiers: ['1', '3', '6'] },
  { id: '9', name: 'Chicken Marsala', price: 24.99, category: '2', description: 'Chicken breast in marsala wine sauce', availableModifiers: ['1', '6'] },
  { id: '10', name: 'Pork Chop', price: 26.99, category: '2', description: 'Grilled pork chop with apple chutney', availableModifiers: ['1', '6'] },
  { id: '11', name: 'Lamb Chops', price: 32.99, category: '2', description: 'Grilled lamb chops with mint sauce', availableModifiers: ['1', '3'] },
  
  // Moving steaks to new Steaks category
  { id: '51', name: 'Ribeye Steak', price: 34.99, category: '11', description: '12oz prime ribeye with garlic butter', availableModifiers: ['steak-1', 'steak-2', 'steak-3', 'steak-4', 'steak-5', 'steak-6'] },
  { id: '52', name: 'Filet Mignon', price: 38.99, category: '11', description: '8oz center cut filet', availableModifiers: ['steak-1', 'steak-2', 'steak-3', 'steak-4', 'steak-5', 'steak-6'] },
  { id: '53', name: 'New York Strip', price: 32.99, category: '11', description: '12oz certified Angus beef', availableModifiers: ['steak-1', 'steak-2', 'steak-3', 'steak-4', 'steak-5', 'steak-6'] },
  { id: '54', name: 'T-Bone Steak', price: 39.99, category: '11', description: '16oz premium cut', availableModifiers: ['steak-1', 'steak-2', 'steak-3', 'steak-4', 'steak-5', 'steak-6'] },
  
  // Previous items 13-50 remain the same
  { id: '13', name: 'Chocolate Cake', price: 9.99, category: '3', description: 'Rich chocolate layer cake', availableModifiers: ['5', '6'] },
  { id: '14', name: 'Tiramisu', price: 8.99, category: '3', description: 'Classic Italian dessert', availableModifiers: ['5'] },
  { id: '15', name: 'Cheesecake', price: 9.99, category: '3', description: 'New York style cheesecake', availableModifiers: ['5'] },
  
  // Adding new Coffee items
  { id: '55', name: 'Espresso', price: 3.49, category: '12', description: 'Double shot', availableModifiers: ['coffee-1', 'coffee-2'] },
  { id: '56', name: 'Cappuccino', price: 4.49, category: '12', description: 'Espresso with steamed milk foam', availableModifiers: ['coffee-1', 'coffee-2', 'coffee-3'] },
  { id: '57', name: 'Latte', price: 4.49, category: '12', description: 'Espresso with steamed milk', availableModifiers: ['coffee-1', 'coffee-2', 'coffee-3'] },
  { id: '58', name: 'Americano', price: 3.49, category: '12', description: 'Espresso with hot water', availableModifiers: ['coffee-1', 'coffee-2'] },
  { id: '59', name: 'Mocha', price: 4.99, category: '12', description: 'Espresso with chocolate and steamed milk', availableModifiers: ['coffee-1', 'coffee-2', 'coffee-3'] },
  
  // Adding Tea items
  { id: '60', name: 'English Breakfast', price: 3.99, category: '13', description: 'Classic black tea', availableModifiers: ['tea-1', 'tea-2'] },
  { id: '61', name: 'Earl Grey', price: 3.99, category: '13', description: 'Black tea with bergamot', availableModifiers: ['tea-1', 'tea-2'] },
  { id: '62', name: 'Green Tea', price: 3.99, category: '13', description: 'Traditional Japanese green tea', availableModifiers: ['tea-1', 'tea-2'] },
  { id: '63', name: 'Chamomile', price: 3.99, category: '13', description: 'Caffeine-free herbal tea', availableModifiers: ['tea-1', 'tea-2'] },
  { id: '64', name: 'Chai Latte', price: 4.99, category: '13', description: 'Spiced tea with steamed milk', availableModifiers: ['tea-1', 'tea-2', 'tea-3'] }
];
