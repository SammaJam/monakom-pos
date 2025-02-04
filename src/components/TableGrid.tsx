import React from 'react';
import { Users } from 'lucide-react';

interface TableGridProps {
  selectedTable: number | null;
  onSelectTable: (tableNumber: number) => void;
}

export default function TableGrid({ selectedTable, onSelectTable }: TableGridProps) {
  const tables = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      {tables.map((tableNumber) => (
        <button
          key={tableNumber}
          onClick={() => onSelectTable(tableNumber)}
          className={`p-4 rounded-lg flex flex-col items-center justify-center gap-2 transition-colors ${
            selectedTable === tableNumber
              ? 'bg-blue-100 border-2 border-blue-500'
              : 'bg-white border-2 border-gray-200 hover:border-blue-300'
          }`}
        >
          <Users size={24} className="text-gray-600" />
          <span className="font-medium">Table {tableNumber}</span>
        </button>
      ))}
    </div>
  );
}
