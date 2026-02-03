
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu, GiTeapot } from 'react-icons/gi';
import { FaCoffee, FaUserSecret } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Admin', path: '/admin', icon: <FaUserSecret className="ml-1" /> },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-pastel-green shadow-lg' : 'bg-pastel-green/90'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <GiTeapot className="text-3xl text-zen-brown" />
            <div>
              <h1 className="text-2xl font-korean font-bold text-zen-brown">선(禪) 가든</h1>
              <p className="text-xs font-zen text-zen-brown/70">Zen Garden Korean Cafe</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.path}
                className="flex items-center text-zen-brown hover:text-zen-brown/80 font-medium transition-colors duration-300"
              >
                {item.name}
                {item.icon}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-zen-brown text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <GiHamburgerMenu />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.path}
                  className="text-zen-brown hover:text-zen-brown/80 font-medium py-2 border-b border-pastel-green-dark/30"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
