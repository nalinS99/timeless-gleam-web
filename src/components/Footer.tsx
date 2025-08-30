import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-charcoal text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-playfair font-bold text-luxury mb-6">
              Timeless Gleam
            </h3>
            <p className="text-white/80 mb-8 leading-relaxed text-lg">
              Subscribe to our newsletter and be the first to discover our latest collections, 
              exclusive offers, and jewelry care tips from our master craftsmen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-primary"
              />
              <Button className="btn-hero whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-playfair font-semibold mb-6 text-primary">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-white/90">123 Luxury Lane</p>
                  <p className="text-white/90">Beverly Hills, CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={20} />
                <p className="text-white/90">(555) 123-4567</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={20} />
                <p className="text-white/90">info@timelessgleam.com</p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-playfair font-semibold mb-6 text-primary">
              Quick Links
            </h4>
            <div className="space-y-3">
              {[
                { name: 'Our Story', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Jewelry Care', href: '#' },
                { name: 'Sizing Guide', href: '#' },
                { name: 'Warranty', href: '#' },
                { name: 'Returns', href: '#' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-white/80 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Social Media & Copyright */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-charcoal transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-white/80 mb-2">
                © 2024 Timeless Gleam. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-white/60">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;