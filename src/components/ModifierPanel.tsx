import React from 'react';
import { Modifier, MenuItem } from '../types';
import { modifiers } from '../data';
import CustomModifierInput from './CustomModifierInput';
import ModifierButton from './ModifierButton';

interface ModifierPanelProps {
  selectedItem: MenuItem | null;
  selectedModifiers: Modifier[];
  onAddModifier: (modifier: Modifier) => void;
}

export default function ModifierPanel({ 
  selectedItem,
  selectedModifiers,
  onAddModifier
}: ModifierPanelProps) {
  if (!selectedItem) {
    return (
      <div className="border-t">
        <h3 className="px-4 py-2 bg-gray-50 font-medium text-gray-400">
          Select an item to view available modifiers
        </h3>
      </div>
    );
  }

  const availableModifiers = modifiers.filter(modifier => 
    selectedItem.availableModifiers.includes(modifier.id)
  );

  const getModifierTitle = () => {
    if (selectedItem.name === 'House Wine') return 'Select Size';
    if (selectedItem.name === 'Ribeye Steak') return 'Select Cooking Preference';
    return `Modifiers for ${selectedItem.name}`;
  };

  return (
    <div className="border-t">
      <h3 className="px-4 py-2 bg-gray-50 font-medium">
        {getModifierTitle()}
      </h3>
      <div className="p-4 flex gap-2 flex-wrap">
        {availableModifiers.map((modifier) => (
          <ModifierButton
            key={modifier.id}
            modifier={modifier}
            isSelected={selectedModifiers.some(m => m.id === modifier.id)}
            onSelect={onAddModifier}
          />
        ))}
      </div>
      <CustomModifierInput onAddModifier={onAddModifier} />
    </div>
  );
}
