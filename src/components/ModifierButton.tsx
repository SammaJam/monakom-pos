import React from 'react';
import { Modifier } from '../types';

interface ModifierButtonProps {
  modifier: Modifier;
  isSelected: boolean;
  onSelect: (modifier: Modifier) => void;
}

export default function ModifierButton({ modifier, isSelected, onSelect }: ModifierButtonProps) {
  return (
    <button
      onClick={() => onSelect(modifier)}
      className={`px-4 py-2 rounded-full transition-colors ${
        isSelected
          ? 'bg-blue-500 text-white'
          : modifier.price === 0 
            ? 'bg-blue-100 hover:bg-blue-200' 
            : 'bg-gray-100 hover:bg-gray-200'
      }`}
    >
      {modifier.name}
      {modifier.price !== 0 && ` (${modifier.price > 0 ? '+' : ''}$${Math.abs(modifier.price).toFixed(2)})`}
    </button>
  );
}