import { Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-coffee-primary text-coffee-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="h-6 w-6" />
              <span className="text-xl font-bold">Café Aroma</span>
            </div>
            <p className="text-sm opacity-80">
              Crafting perfect moments, one cup at a time.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-coffee-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-coffee-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-coffee-accent transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-coffee-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Shop No 17,Ground Floor</li>
              <li>VR Mall,Chennai-600040</li>
              <li>1860 266 0010</li>
              <li>hello@cafearoma.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2">
              <li>Mon - Fri: 7am - 8pm</li>
              <li>Saturday: 8am - 8pm</li>
              <li>Sunday: 8am - 6pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-coffee-secondary/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Café Aroma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
