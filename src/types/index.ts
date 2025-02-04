export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  category: string;
  availableModifiers: string[];
}

export interface Modifier {
  id: string;
  name: string;
  price: number;
  applicableCategories?: string[];
}

export interface OrderItem {
  menuItem: MenuItem;
  modifiers: Modifier[];
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
