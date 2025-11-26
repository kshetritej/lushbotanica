"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Logo />
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Crafting beautiful botanical arrangements that speak from the
              heart.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-black mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-black transition text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-black transition text-sm"
                >
                  Flowers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-black transition text-sm"
                >
                  Greenery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-black transition text-sm"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-black mb-4">Collections</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-black transition text-sm"
                >
                  Seasonal Blooms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-black transition text-sm"
                >
                  Wedding Arrangements
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-black transition text-sm"
                >
                  Corporate Gifts
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-black transition text-sm"
                >
                  Custom Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-black mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-black flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 hover:text-black transition text-sm"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-black flex-shrink-0" />
                <a
                  href="mailto:hello@lushbotanica.com"
                  className="text-gray-600 hover:text-black transition text-sm"
                >
                  hello@lushbotanica.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">
                  123 Bloom Street
                  <br />
                  Garden City, GC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-200 pt-12 mb-12">
          <div className="max-w-md">
            <h4 className="font-bold text-black mb-4">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Get exclusive offers and updates on new collections.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-0"
              />
              <button className="px-6 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className=" text-sm">
              © 2025 LushBotanica. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
