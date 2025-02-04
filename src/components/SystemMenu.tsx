import React from 'react';
import { Settings, Users, Clock, Database } from 'lucide-react';
import TableSelector from './TableSelector';

interface SystemMenuProps {
  selectedTable: number | null;
  onOpenTableSelect: () => void;
}

export default function SystemMenu({ selectedTable, onOpenTableSelect }: SystemMenuProps) {
  return (
    <div className="h-14 bg-gray-100 border-b flex items-center justify-between px-4">
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200">
          <Clock size={20} />
          <span>Orders</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200">
          <Database size={20} />
          <span>Reports</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200">
          <Settings size={20} />
          <span>Settings</span>
        </button>
      </div>
      <TableSelector
        selectedTable={selectedTable}
        onOpenTableSelect={onOpenTableSelect}
        className="ml-auto"
      />
    </div>
  );
}
