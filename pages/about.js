
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { GiBamboo, GiTeapot, GiStoneCrafting } from 'react-icons/gi';
import { FaLeaf, FaHandsHelping, FaRecycle } from 'react-icons/fa';

export default function About() {
  const principles = [
    { icon: <GiTeapot />, title: "Traditional Craftsmanship", desc: "We preserve ancient Korean tea-making techniques passed down through generations." },
    { icon: <FaLeaf />, title: "Natural Ingredients", desc: "All our ingredients are organic, locally sourced, and seasonal." },
    { icon: <GiBamboo />, title: "Sustainable Practices", desc: "We use biodegradable bamboo packaging and zero-waste processes." },
    { icon: <FaHandsHelping />, title: "Community Focus", desc: "We partner with local Korean artisans and farmers." },
  ];

  return (
    <Layout title="About - Zen Garden Korean Cafe">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pastel-green to-pastel-green-light">
        <div className="absolute inset-0 bg-[url('/images/zen-circle.png')] opacity-5"></div>
        <div className="section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-korean text-zen-brown mb-6">
              Our Story
            </h1>
            <p className="text-2xl font-fancy text-zen-brown/80 mb-8">
              A sanctuary where Korean tradition meets mindful living
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-korean text-zen-brown mb-6">
                The Zen Journey
              </h2>
              <div className="space-y-4 text-zen-brown/80">
                <p>
                  Founded in 2018 by Master Kim Soo-ji, Zen Garden began as a small tea house 
                  dedicated to preserving traditional Korean tea ceremonies. Master Kim, a third-generation 
                  tea artisan from Jeju Island, wanted to create a space where people could experience 
                  the tranquility of Korean tea culture.
                </p>
                <p>
                  What started as a humble tea house has blossomed into a sanctuary for those seeking 
                  respite from urban life. Our cafe is designed around the principles of Korean zen 
                  philosophy - simplicity, natural beauty, and mindfulness.
                </p>
                <p>
                  Every element, from the bamboo architecture to the curated tea selection, is 
                  intentional. We believe that the preparation and enjoyment of food and drink 
                  should be a meditative experience.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-pastel-green to-pastel-green-dark rounded-3xl h-96 flex items-center justify-center">
                <GiStoneCrafting className="text-8xl text-white/80" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-zen-beige rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-fancy text-zen-brown mb-2">Master Kim Soo-ji</h3>
                <p className="text-zen-brown/70">Founder & Tea Master</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="section-padding bg-pastel-green-light">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-korean text-zen-brown mb-4">
              Our Principles
            </h2>
            <p className="text-zen-brown/70 max-w-2xl mx-auto">
              The four pillars that guide everything we do at Zen Garden
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="text-4xl text-pastel-green-dark mb-4 flex justify-center">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-fancy text-zen-brown mb-3">
                  {principle.title}
                </h3>
                <p className="text-zen-brown/70">
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-korean text-zen-brown mb-6">
            Experience Zen Garden
          </h2>
          <p className="text-xl text-zen-brown/80 mb-8">
            Join us for traditional tea ceremonies every Saturday at 2 PM, 
            or participate in our monthly Korean dessert making workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary text-lg px-8 py-3">
              Visit Our Cafe
            </a>
            <a href="/menu" className="btn-secondary text-lg px-8 py-3">
              Explore Our Menu
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
