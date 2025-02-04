import React from 'react';
import { X } from 'lucide-react';
import TableGrid from './TableGrid';

interface TableModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTable: number | null;
  onSelectTable: (tableNumber: number) => void;
}

export default function TableModal({ 
  isOpen, 
  onClose, 
  selectedTable, 
  onSelectTable 
}: TableModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-[480px] max-w-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Select Table</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={20} />
          </button>
        </div>
        <TableGrid
          selectedTable={selectedTable}
          onSelectTable={(table) => {
            onSelectTable(table);
            onClose();
          }}
        />
      </div>
    </div>
  );
}
