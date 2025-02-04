import React from 'react';
import { categories } from '../data';
import * as Icons from 'lucide-react';
import { CupSoda } from 'lucide-react';

export default function CategoryList({ 
  selectedCategory, 
  onSelectCategory 
}: {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}) {
  return (
    <div className="w-48 bg-gray-50 h-[calc(100vh-3.5rem)] overflow-y-auto">
      {categories.map((category) => {
        const IconComponent = Icons[category.icon as keyof typeof Icons] || CupSoda;
        return (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-100 transition-colors ${
              selectedCategory === category.id ? 'bg-gray-200' : ''
            }`}
          >
            <IconComponent size={20} />
            <span className="text-left">{category.name}</span>
          </button>
        );
      })}
    </div>
  );
}
