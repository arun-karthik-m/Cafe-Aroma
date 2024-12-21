import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-coffee-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-coffee-primary text-center mb-16">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-coffee-accent mt-1" />
              <div>
                <h3 className="text-xl font-bold text-coffee-primary mb-2">
                  Visit Us
                </h3>
                <p className="text-coffee-text">
                  Shop No 17, 
                  Ground Floor, VR Mall, 
                  Anna Nagar West, Chennai, Tamil Nadu 600040
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-coffee-accent mt-1" />
              <div>
                <h3 className="text-xl font-bold text-coffee-primary mb-2">
                  Call Us
                </h3>
                <p className="text-coffee-text">1860 266 0010</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-coffee-accent mt-1" />
              <div>
                <h3 className="text-xl font-bold text-coffee-primary mb-2">
                  Email Us
                </h3>
                <p className="text-coffee-text">hello@cafearoma.com</p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-coffee-primary font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-coffee-accent/20 focus:outline-none focus:border-coffee-accent"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-coffee-primary font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-coffee-accent/20 focus:outline-none focus:border-coffee-accent"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-coffee-primary font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-coffee-accent/20 focus:outline-none focus:border-coffee-accent"
              ></textarea>
            </div>
            <Button className="w-full bg-coffee-primary text-coffee-secondary hover:bg-coffee-dark">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
