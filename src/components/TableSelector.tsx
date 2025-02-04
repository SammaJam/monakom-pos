import React from 'react';
import { Users } from 'lucide-react';

interface TableSelectorProps {
  selectedTable: number | null;
  onOpenTableSelect: () => void;
  className?: string;
}

export default function TableSelector({ selectedTable, onOpenTableSelect, className = '' }: TableSelectorProps) {
  return (
    <button
      onClick={onOpenTableSelect}
      className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200 ${
        !selectedTable ? 'text-red-500' : ''
      } ${className}`}
    >
      <Users size={20} className="text-gray-600" />
      <span className="font-medium">
        {selectedTable ? `Table ${selectedTable}` : 'Select Table'}
      </span>
    </button>
  );
}
