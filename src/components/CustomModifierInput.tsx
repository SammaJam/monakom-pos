import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Modifier } from '../types';

interface CustomModifierInputProps {
  onAddModifier: (modifier: Modifier) => void;
}

export default function CustomModifierInput({ onAddModifier }: CustomModifierInputProps) {
  const [text, setText] = useState('');
  const [price, setPrice] = useState('0.00');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddModifier({
        id: `custom-${Date.now()}`,
        name: text.trim(),
        price: parseFloat(price) || 0,
        applicableCategories: []
      });
      setText('');
      setPrice('0.00');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t bg-gray-50">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Special instructions..."
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="relative">
          <span className="absolute left-3 top-2.5 text-gray-500">$</span>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            step="0.01"
            min="0"
            className="w-24 px-3 py-2 pl-7 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Plus size={20} />
        </button>
      </div>
    </form>
  );
}