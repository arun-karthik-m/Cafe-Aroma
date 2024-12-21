import { Coffee, CupSoda } from "lucide-react";

const menuItems = [
  {
    category: "Hot Coffee",
    icon: Coffee,
    items: [
      { name: "Espresso", price: "₹215", description: "Pure and intense" },
      { name: "Cappuccino", price: "₹240", description: "Classic Italian style" },
      { name: "Latte", price: "₹235", description: "Smooth and creamy" },
    ],
  },
  {
    category: "Cold Drinks",
    icon: CupSoda,
    items: [
      { name: "Iced Coffee", price: "₹170", description: "Refreshingly bold" },
      { name: "Cold Brew", price: "₹280", description: "Smooth and strong" },
      { name: "Frappuccino", price: "₹315", description: "Blended to perfection" },
    ],
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-coffee-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-coffee-primary text-center mb-16">
          Our Menu
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {menuItems.map((category) => (
            <div key={category.category}>
              <div className="flex items-center gap-2 mb-6">
                <category.icon className="h-8 w-8 text-coffee-accent" />
                <h3 className="text-2xl font-bold text-coffee-primary">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-6">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-coffee-primary">
                        {item.name}
                      </h4>
                      <span className="text-coffee-accent font-semibold">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-coffee-text text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
