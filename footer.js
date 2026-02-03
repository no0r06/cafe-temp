
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { GiTeapot } from 'react-icons/gi';

export default function Footer() {
  return (
    <footer className="bg-zen-brown text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GiTeapot className="text-3xl text-pastel-green" />
              <div>
                <h2 className="text-2xl font-korean">선(禪) 가든</h2>
                <p className="text-pastel-green text-sm">Zen Garden Korean Cafe</p>
              </div>
            </div>
            <p className="text-white/70">
              Experience tranquility and authentic Korean flavors in the heart of the city.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-fancy mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-white/70 hover:text-pastel-green transition-colors">Home</a></li>
              <li><a href="/menu" className="text-white/70 hover:text-pastel-green transition-colors">Menu</a></li>
              <li><a href="/about" className="text-white/70 hover:text-pastel-green transition-colors">About</a></li>
              <li><a href="/contact" className="text-white/70 hover:text-pastel-green transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-fancy mb-4">Contact Info</h3>
            <ul className="space-y-2 text-white/70">
              <li>123 Zen Way, Seoul</li>
              <li>South Korea</li>
              <li>+82 2-123-4567</li>
              <li>hello@zengardencafe.kr</li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-xl font-fancy mb-4">Stay Connected</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-white/70 hover:text-pastel-green text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-white/70 hover:text-pastel-green text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-white/70 hover:text-pastel-green text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-white/70 hover:text-pastel-green text-xl">
                <FaYoutube />
              </a>
            </div>
            <p className="text-white/70 text-sm">
              Subscribe to our newsletter for updates on seasonal menus and events.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Zen Garden Korean Cafe. All rights reserved.</p>
          <p className="mt-2">Made with mindfulness in Seoul</p>
        </div>
      </div>
    </footer>
  );
}
