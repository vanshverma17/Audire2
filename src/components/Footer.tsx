'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../assets/images/LogoWhite.png'; 

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-300 border-t border-neutral-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src={Logo}
              alt="Audire Logo"
              className="w-10 h-10 object-contain rounded"
            />
            <h3 className="text-xl font-semibold text-white">Audire Technologies</h3>
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Experience high-end AV, immersive home theater, and seamless automation — all integrated under one vision of luxury and precision.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-neutral-500" />
              +91 97877 08777
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-neutral-500" />
              info@audire.in
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-neutral-500 mt-1" />
              <span>Coimbatore HQ & Chennai Experience Center</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>
              <a href="#about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#brands" className="hover:text-white transition">
                High-End AV
              </a>
            </li>
            <li>
              <a href="#home-theater" className="hover:text-white transition">
                Home Theater
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 py-6 text-center text-sm text-neutral-500 bg-neutral-950">
        © {new Date().getFullYear()} Audire Technologies. All rights reserved.
      </div>
    </footer>
  );
}
