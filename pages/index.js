import Layout from '../components/Layout';
import { GiBamboo, GiTeapot, GiRiceCooker } from 'react-icons/gi';
import { FaLeaf, FaCoffee } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  const features = [
    { icon: <GiTeapot />, title: "Traditional Korean Tea", desc: "Authentic herbal blends" },
    { icon: <GiRiceCooker />, title: "Korean Snacks", desc: "Homemade rice cakes & desserts" },
    { icon: <FaLeaf />, title: "Zen Atmosphere", desc: "Peaceful garden setting" },
    { icon: <GiBamboo />, title: "Natural Materials", desc: "Eco-friendly bamboo everything" },
  ];

  return (
    <Layout title="Zen Garden - Tranquil Korean Cafe">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pastel-green to-pastel-green-light">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        <div className="section-padding relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-korean font-bold text-zen-brown mb-6">
              선(禪) 가든
            </h1>
            <p className="text-2xl md:text-3xl font-fancy text-zen-brown/80 mb-8">
              Where Korean tradition meets zen tranquility
            </p>
            <p className="text-lg text-zen-brown/70 mb-12 max-w-2xl mx-auto">
              Experience the harmony of authentic Korean flavors in our peaceful garden setting. 
              Each cup of tea and every bite of our traditional snacks is crafted with mindfulness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/menu" className="btn-primary text-lg px-8 py-3">
                Explore Menu
              </a>
              <a href="/contact" className="btn-secondary text-lg px-8 py-3">
                Visit Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-korean text-center text-zen-brown mb-12">
            Our Zen Philosophy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl text-pastel-green-dark mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-fancy text-zen-brown mb-2">
                  {feature.title}
                </h3>
                <p className="text-zen-brown/70">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Menu Section */}
      <section className="section-padding bg-pastel-green-light">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-korean text-zen-brown mb-4">
              Signature Items
            </h2>
            <p className="text-zen-brown/70 max-w-2xl mx-auto">
              A taste of our most beloved Korean cafe creations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Matcha Bamboo Latte", price: "$6.50", desc: "Ceremonial matcha with bamboo essence" },
              { name: "Yuzu Honey Tea", price: "$5.75", desc: "Korean yuzu with wildflower honey" },
              { name: "Patbingsu", price: "$8.99", desc: "Traditional shaved ice dessert" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="h-48 bg-gradient-to-br from-pastel-green to-pastel-green-dark rounded-lg mb-4 flex items-center justify-center">
                  <FaCoffee className="text-6xl text-white/80" />
                </div>
                <h3 className="text-2xl font-fancy text-zen-brown mb-2">
                  {item.name}
                </h3>
                <p className="text-zen-brown/70 mb-4">
                  {item.desc}
                </p>
                <div className="text-2xl font-korean text-pastel-green-dark">
                  {item.price}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/menu" className="btn-primary text-lg px-8 py-3">
              View Full Menu
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
