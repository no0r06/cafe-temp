
import { motion } from 'framer-motion';
import { FaFire, FaLeaf, FaStar } from 'react-icons/fa';

export default function MenuItem({ item, index }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="menu-item-card"
    >
      {/* Item Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-fancy text-zen-brown mb-1">
            {item.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-lg font-korean text-pastel-green-dark">
              {item.price}
            </span>
            {item.isNew && (
              <span className="bg-pastel-green text-zen-brown text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <FaLeaf /> New
              </span>
            )}
            {item.isPopular && (
              <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <FaFire /> Popular
              </span>
            )}
          </div>
        </div>
        
        {/* Placeholder for Image */}
        <div className="w-20 h-20 bg-gradient-to-br from-pastel-green to-pastel-green-dark rounded-full flex items-center justify-center">
          <FaStar className="text-2xl text-white/80" />
        </div>
      </div>
      
      {/* Description */}
      <p className="text-zen-brown/70 mb-4">
        {item.desc}
      </p>
      
      {/* Category Tag */}
      <div className="flex justify-between items-center">
        <span className="text-xs text-zen-brown/50 uppercase tracking-wider">
          {item.category}
        </span>
        <button className="text-pastel-green-dark hover:text-pastel-green font-medium text-sm">
          Add to Order
        </button>
      </div>
    </motion.div>
  );
}
