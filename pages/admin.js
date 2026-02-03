
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEdit, FaTrash, FaPlus, FaImage, FaSave, FaTimes } from 'react-icons/fa';

export default function Admin() {
  const [menuItems, setMenuItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'beverage',
    price: '',
    desc: '',
    isNew: false,
    isPopular: false
  });

  // Initial menu items (same as in menu.js)
  useEffect(() => {
    const initialItems = [
      { id: 1, name: "Korean Traditional Tea", category: "beverage", price: "$5.50", desc: "Authentic Korean herbal tea blend", isNew: true, isPopular: false },
      { id: 2, name: "Matcha Bamboo Latte", category: "beverage", price: "$6.50", desc: "Ceremonial matcha with bamboo essence", isNew: false, isPopular: true },
      // ... add all 20 items here
    ];
    setMenuItems(initialItems);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAddItem = () => {
    const newItem = {
      id: menuItems.length + 1,
      ...formData
    };
    setMenuItems([...menuItems, newItem]);
    setIsAdding(false);
    setFormData({
      name: '',
      category: 'beverage',
      price: '',
      desc: '',
      isNew: false,
      isPopular: false
    });
  };

  const handleEditItem = (item) => {
    setEditingItem(item.id);
    setFormData(item);
  };

  const handleUpdateItem = () => {
    setMenuItems(menuItems.map(item => 
      item.id === editingItem ? { ...item, ...formData } : item
    ));
    setEditingItem(null);
    setFormData({
      name: '',
      category: 'beverage',
      price: '',
      desc: '',
      isNew: false,
      isPopular: false
    });
  };

  const handleDeleteItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const categories = [
    'beverage',
    'dessert',
    'savory',
    'special'
  ];

  return (
    <Layout title="Admin Panel - Zen Garden">
      <div className="min-h-screen bg-pastel-green-light">
        {/* Admin Header */}
        <div className="bg-zen-brown text-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-korean">Admin Panel</h1>
                <p className="text-pastel-green">Manage your cafe menu</p>
              </div>
              <button
                onClick={() => setIsAdding(true)}
                className="btn-primary flex items-center gap-2 bg-white text-zen-brown hover:bg-pastel-green-light"
              >
                <FaPlus /> Add New Item
              </button>
            </div>
          </div>
        </div>

        {/* Add/Edit Form Modal */}
        <AnimatePresence>
          {(isAdding || editingItem) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-korean text-zen-brown">
                    {editingItem ? 'Edit Item' : 'Add New Item'}
                  </h2>
                  <button
                    onClick={() => {
                      setIsAdding(false);
                      setEditingItem(null);
                      setFormData({
                        name: '',
                        category: 'beverage',
                        price: '',
                        desc: '',
                        isNew: false,
                        isPopular: false
                      });
                    }}
                    className="text-zen-brown/70 hover:text-zen-brown"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-zen-brown mb-2">Item Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-pastel-green focus:outline-none focus:ring-2 focus:ring-pastel-green/30"
                    />
                  </div>

                  <div>
                    <label className="block text-zen-brown mb-2">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-pastel-green focus:outline-none focus:ring-2 focus:ring-pastel-green/30"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>
                          {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-zen-brown mb-2">Price</label>
                    <input
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-pastel-green focus:outline-none focus:ring-2 focus:ring-pastel-green/30"
                      placeholder="$0.00"
                    />
                  </div>

                  <div>
                    <label className="block text-zen-brown mb-2">Description</label>
                    <textarea
                      name="desc"
                      value={formData.desc}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-2 rounded-lg border border-pastel-green focus:outline-none focus:ring-2 focus:ring-pastel-green/30"
                    />
                  </div>

                  {/* Image Upload Placeholder */}
                  <div className="border-2 border-dashed border-pastel-green rounded-lg p-4 text-center">
                    <FaImage className="text-2xl text-pastel-green-dark mx-auto mb-2" />
                    <p className="text-zen-brown/60 text-sm">
                      Image upload feature would be implemented with a backend
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="isNew"
                        checked={formData.isNew}
                        onChange={handleInputChange}
                        className="rounded text-pastel-green-dark"
                      />
                      <span className="text-zen-brown">New Item</span>
                    </label>

                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="isPopular"
                        checked={formData.isPopular}
                        onChange={handleInputChange}
                        className="rounded text-pastel-green-dark"
                      />
                      <span className="text-zen-brown">Popular</span>
                    </label>
                  </div>

                  <button
                    onClick={editingItem ? handleUpdateItem : handleAddItem}
                    className="btn-primary w-full py-3 flex items-center justify-center gap-2"
                  >
                    <FaSave /> {editingItem ? 'Update Item' : 'Add Item'}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu Items List */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-pastel-green">
                  <tr>
                    <th className="text-left p-4 font-fancy text-zen-brown">Name</th>
                    <th className="text-left p-4 font-fancy text-zen-brown">Category</th>
                    <th className="text-left p-4 font-fancy text-zen-brown">Price</th>
                    <th className="text-left p-4 font-fancy text-zen-brown">Status</th>
                    <th className="text-left p-4 font-fancy text-zen-brown">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {menuItems.map((item) => (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="border-b border-pastel-green/30 hover:bg-pastel-green-light/30"
                    >
                      <td className="p-4">
                        <div>
                          <div className="font-medium text-zen-brown">{item.name}</div>
                          <div className="text-sm text-zen-brown/60">{item.desc}</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-3 py-1 rounded-full bg-pastel-green/30 text-zen-brown text-sm">
                          {item.category}
                        </span>
                      </td>
                      <td className="p-4 font-korean text-pastel-green-dark">{item.price}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          {item.isNew && (
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                              New
                            </span>
                          )}
                          {item.isPopular && (
                            <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditItem(item)}
                            className="p-2 text-zen-brown/70 hover:text-zen-brown hover:bg-pastel-green/30 rounded-lg"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            className="p-2 text-zen-brown/70 hover:text-red-500 hover:bg-red-50 rounded-lg"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="card text-center">
              <div className="text-2xl font-korean text-pastel-green-dark mb-2">
                {menuItems.length}
              </div>
              <div className="text-zen-brown/70">Total Items</div>
            </div>
            <div className="card text-center">
              <div className="text-2xl font-korean text-pastel-green-dark mb-2">
                {menuItems.filter(i => i.isNew).length}
              </div>
              <div className="text-zen-brown/70">New Items</div>
            </div>
            <div className="card text-center">
              <div className="text-2xl font-korean text-pastel-green-dark mb-2">
                {menuItems.filter(i => i.isPopular).length}
              </div>
              <div className="text-zen-brown/70">Popular Items</div>
            </div>
            <div className="card text-center">
              <div className="text-2xl font-korean text-pastel-green-dark mb-2">
                {menuItems.filter(i => i.category === 'beverage').length}
              </div>
              <div className="text-zen-brown/70">Beverages</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
