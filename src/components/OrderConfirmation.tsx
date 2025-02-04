import React from 'react';
import { Plus } from 'lucide-react';

interface OrderConfirmationProps {
  onConfirm: () => void;
}

export default function OrderConfirmation({ onConfirm }: OrderConfirmationProps) {
  return (
    <div className="p-4 border-t bg-gray-50">
      <button
        onClick={onConfirm}
        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Plus size={20} />
        <span>Add to Order</span>
      </button>
    </div>
  );
}
