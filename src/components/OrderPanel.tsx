import React from 'react';
import { OrderItem } from '../types';
import { Trash2, Plus, CheckCircle } from 'lucide-react';

interface OrderPanelProps {
  orderItems: OrderItem[];
  onRemoveItem: (index: number) => void;
  onConfirmOrder: () => void;
  selectedItem: boolean;
}

export default function OrderPanel({ 
  orderItems, 
  onRemoveItem,
  onConfirmOrder,
  selectedItem
}: OrderPanelProps) {
  const calculateItemTotal = (item: OrderItem) => {
    const modifiersTotal = item.modifiers.reduce((sum, mod) => sum + mod.price, 0);
    return (item.menuItem.price + modifiersTotal) * item.quantity;
  };

  const total = orderItems.reduce((sum, item) => sum + calculateItemTotal(item), 0);

  return (
    <div className="w-80 bg-white h-[calc(100vh-3.5rem)] flex flex-col border-l">
      <div className="p-4 border-b">
        <button
          onClick={onConfirmOrder}
          disabled={!selectedItem}
          className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg ${
            selectedItem
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          <Plus size={20} />
          <span>Add to Order</span>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {orderItems.map((item, index) => (
          <div key={index} className="mb-4 bg-gray-50 p-3 rounded-lg">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-medium">{item.menuItem.name}</h4>
                  <span className="font-medium">${item.menuItem.price.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              </div>
              <button
                onClick={() => onRemoveItem(index)}
                className="text-red-500 hover:text-red-700 ml-2"
              >
                <Trash2 size={18} />
              </button>
            </div>
            {item.modifiers.length > 0 && (
              <div className="mt-2 text-sm text-gray-600">
                {item.modifiers.map((mod, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span>+ {mod.name}</span>
                    <span>${mod.price > 0 ? '+' : ''}{mod.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-2 pt-2 border-t flex justify-between text-sm font-medium">
              <span>Item Total:</span>
              <span>${calculateItemTotal(item).toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t p-4">
        <div className="flex justify-between text-lg font-medium mb-4">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button 
          className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg ${
            orderItems.length > 0
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          disabled={orderItems.length === 0}
        >
          <CheckCircle size={20} />
          <span>Confirm Order</span>
        </button>
      </div>
    </div>
  );
}