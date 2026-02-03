
import Layout from '../components/Layout';
import MenuItem from '../components/MenuItem';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const menuItems = [
    // Beverages
    { id: 1, name: "Korean Traditional Tea", category: "beverage", price: "$5.50", desc: "Authentic Korean herbal tea blend", isNew: true },
    { id: 2, name: "Matcha Bamboo Latte", category: "beverage", price: "$6.50", desc: "Ceremonial matcha with bamboo essence" },
    { id: 3, name: "Yuzu Honey Tea", category: "beverage", price: "$5.75", desc: "Korean yuzu with wildflower honey" },
    { id: 4, name: "Black Sesame Latte", category: "beverage", price: "$6.25", desc: "Roasted black sesame with oat milk" },
    { id: 5, name: "Ginseng Energy Brew", category: "beverage", price: "$7.50", desc: "Korean red ginseng infusion" },
    { id: 6, name: "Jeju Hallabong Ade", category: "beverage", price: "$6.00", desc: "Jeju island citrus sparkling drink" },
    
    // Desserts
    { id: 7, name: "Patbingsu", category: "dessert", price: "$8.99", desc: "Traditional Korean shaved ice dessert" },
    { id: 8, name: "Matcha Tiramisu", category: "dessert", price: "$7.50", desc: "Green tea tiramisu with red bean" },
    { id: 9, name: "Hotteok", category: "dessert", price: "$5.25", desc: "Korean cinnamon sugar pancakes" },
    { id: 10, name: "Yakgwa", category: "dessert", price: "$4.75", desc: "Traditional honey cookies" },
    { id: 11, name: "Bungeoppang", category: "dessert", price: "$5.50", desc: "Fish-shaped pastry with red bean" },
    
    // Savory Items
    { id: 12, name: "Kimchi Toast", category: "savory", price: "$8.50", desc: "Sourdough with homemade kimchi" },
    { id: 13, name: "Kimbap Rolls", category: "savory", price: "$9.25", desc: "Assorted Korean rice rolls" },
    { id: 14, name: "Tteokbokki", category: "savory", price: "$10.50", desc: "Spicy rice cakes" },
    { id: 15, name: "Korean Pancakes", category: "savory", price: "$9.75", desc: "Savory scallion pancakes" },
    
    // Specials
    { id: 16, name: "Zen Garden Platter", category: "special", price: "$15.99", desc: "Assorted Korean treats", isPopular: true },
    { id: 17, name: "Traditional Tea Set", category: "special", price: "$18.50", desc: "Three teas with accompaniments" },
    { id: 18, name: "Seasonal Fruit Bowl", category: "special", price: "$12.75", desc: "Local fruits with yuja dressing" },
    { id: 19, name: "Bamboo Bento", category: "special", price: "$16.25", desc: "Lunch set in bamboo container" },
    { id: 20, name: "Mooncake Selection", category: "special", price: "$14.50", desc: "Assorted traditional mooncakes" },
  ];

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'beverage', name: 'Beverages' },
    { id: 'dessert', name: 'Desserts' },
    { id: 'savory', name: 'Savory Items' },
    { id: 'special', name: 'Special Sets' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <Layout title="Menu - Zen Garden Korean Cafe">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pastel-green to-pastel-green-light overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/zen-pattern.png')] opacity-5"></div>
        <div className="section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-korean text-zen-brown mb-6">
              Our Menu
            </h1>
            <p className="text-xl text-zen-brown/80 mb-8">
              Each item is crafted with mindfulness and traditional Korean techniques
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-sm py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-pastel-green text-zen-brown font-semibold'
                    : 'bg-pastel-green-light text-zen-brown/70 hover:bg-pastel-green/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <MenuItem key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Menu Note */}
      <section className="bg-zen-beige/30 section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-2xl font-korean text-zen-brown mb-4">
            Menu Notes
          </h3>
          <p className="text-zen-brown/70 mb-4">
            All our ingredients are sourced from local organic farms. 
            We accommodate dietary restrictions - please inform our staff.
          </p>
          <p className="text-sm text-zen-brown/50">
            *Prices include tax. Seasonal items may vary.
          </p>
        </div>
      </section>
    </Layout>
  );
}
