
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaInstagram, FaFacebook } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submission status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, title: "Address", info: "123 Zen Way, Seoul, South Korea" },
    { icon: <FaPhone />, title: "Phone", info: "+82 2-123-4567" },
    { icon: <FaEnvelope />, title: "Email", info: "hello@zengardencafe.kr" },
    { icon: <FaClock />, title: "Hours", info: "Mon-Sun: 8AM - 10PM" },
  ];

  return (
    <Layout title="Contact - Zen Garden Korean Cafe">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pastel-green to-pastel-green-light">
        <div className="absolute inset-0 bg-[url('/images/contact-pattern.png')] opacity-5"></div>
        <div className="section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-korean text-zen-brown mb-6">
              Visit Us
            </h1>
            <p className="text-2xl font-fancy text-zen-brown/80 mb-8">
              Find your moment of tranquility at Zen Garden
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-korean text-zen-brown mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-pastel-green-dark text-xl mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-fancy text-zen-brown text-lg">
                        {item.title}
                      </h3>
                      <p className="text-zen-brown/70">
                        {item.info}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-fancy text-zen-brown text-lg mb-4">
                  Follow Our Journey
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-zen-brown/70 hover:text-pastel-green-dark text-2xl">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-zen-brown/70 hover:text-pastel-green-dark text-2xl">
                    <FaFacebook />
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 bg-gradient-to-br from-pastel-green to-pastel-green-dark rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-4xl text-white/80 mx-auto mb-4" />
                  <p className="text-white font-medium">Seoul, South Korea</p>
                  <p className="text-white/80 text-sm">123 Zen Way</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card"
            >
              <h2 className="text-3xl font-korean text-zen-brown mb-6">
                Send a Message
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-pastel-green/30 rounded-xl p-6 text-center"
                >
                  <div className="text-4xl text-pastel-green-dark mb-4">✓</div>
                  <h3 className="text-xl font-fancy text-zen-brown mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-zen-brown/70">
                    Thank you for reaching out. We'll respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-zen-brown mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-pastel-green focus:border-pastel-green-dark focus:outline-none focus:ring-2 focus:ring-pastel-green/30 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-zen-brown mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-pastel-green focus:border-pastel-green-dark focus:outline-none focus:ring-2 focus:ring-pastel-green/30 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-zen-brown mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-pastel-green focus:border-pastel-green-dark focus:outline-none focus:ring-2 focus:ring-pastel-green/30 transition-all"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full py-3 text-lg"
                  >
                    Send Message
                  </button>
                </form>
              )}
              
              <div className="mt-8 pt-6 border-t border-pastel-green/30">
                <p className="text-sm text-zen-brown/60">
                  For catering inquiries or private events, please call us directly.
                  We offer traditional Korean tea ceremony experiences for groups.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
