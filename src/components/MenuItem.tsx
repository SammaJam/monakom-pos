import React from 'react';
import { MenuItem as MenuItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
  isSelected: boolean;
  onSelect: (item: MenuItemType) => void;
}

export default function MenuItem({ item, isSelected, onSelect }: MenuItemProps) {
  return (
    <button
      onClick={() => onSelect(item)}
      className={`w-full bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow text-left ${
        isSelected ? 'ring-2 ring-blue-500' : ''
      }`}
    >
      <h3 className="font-medium text-lg">{item.name}</h3>
      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
      <p className="text-blue-600 mt-2">${item.price.toFixed(2)}</p>
    </button>
  );
}