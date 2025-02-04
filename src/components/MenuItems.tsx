import React from 'react';
import { MenuItem as MenuItemType } from '../types';
import MenuItem from './MenuItem';
import { menuItems } from '../data';

interface MenuItemsProps {
  categoryId: string;
  selectedItem: MenuItemType | null;
  onSelectItem: (item: MenuItemType) => void;
}

export default function MenuItems({ categoryId, selectedItem, onSelectItem }: MenuItemsProps) {
  const items = menuItems.filter(item => item.category === categoryId);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {items.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          isSelected={selectedItem?.id === item.id}
          onSelect={onSelectItem}
        />
      ))}
    </div>
  );
}
