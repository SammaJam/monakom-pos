import React, { useState } from 'react';
import SystemMenu from './components/SystemMenu';
import CategoryList from './components/CategoryList';
import MenuItems from './components/MenuItems';
import ModifierPanel from './components/ModifierPanel';
import OrderPanel from './components/OrderPanel';
import TableModal from './components/TableModal';
import { MenuItem, Modifier, OrderItem } from './types';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('1');
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [selectedModifiers, setSelectedModifiers] = useState<Modifier[]>([]);
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);

  const handleSelectItem = (item: MenuItem) => {
    setSelectedItem(item);
    setSelectedModifiers([]);
  };

  const handleAddModifier = (modifier: Modifier) => {
    setSelectedModifiers(prev => {
      const exists = prev.some(m => m.id === modifier.id);
      if (exists) {
        return prev.filter(m => m.id !== modifier.id);
      }
      return [...prev, modifier];
    });
  };

  const handleConfirmOrder = () => {
    if (selectedItem) {
      setOrderItems(prev => [...prev, {
        menuItem: selectedItem,
        modifiers: selectedModifiers,
        quantity: 1
      }]);
      setSelectedItem(null);
      setSelectedModifiers([]);
    }
  };

  const handleRemoveItem = (index: number) => {
    setOrderItems(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      <SystemMenu
        selectedTable={selectedTable}
        onOpenTableSelect={() => setIsTableModalOpen(true)}
      />
      <div className="flex flex-1 overflow-hidden">
        <CategoryList
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <MenuItems
              categoryId={selectedCategory}
              selectedItem={selectedItem}
              onSelectItem={handleSelectItem}
            />
          </div>
          <ModifierPanel 
            selectedItem={selectedItem}
            selectedModifiers={selectedModifiers}
            onAddModifier={handleAddModifier}
          />
        </div>
        <OrderPanel
          orderItems={orderItems}
          onRemoveItem={handleRemoveItem}
          onConfirmOrder={handleConfirmOrder}
          selectedItem={!!selectedItem}
        />
      </div>
      <TableModal
        isOpen={isTableModalOpen}
        onClose={() => setIsTableModalOpen(false)}
        selectedTable={selectedTable}
        onSelectTable={setSelectedTable}
      />
    </div>
  );
}

export default App;
