import { Coffee } from "lucide-react";
import { Button } from "./ui/button";

const Subscription = () => {
  return (
    <section id="subscription" className="py-20 bg-coffee-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Coffee className="h-12 w-12 text-coffee-accent mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-coffee-secondary mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-coffee-secondary/80 mb-8">
            Stay updated with our latest offers, events, and coffee stories.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-coffee-accent/20 bg-coffee-secondary/10 text-coffee-secondary placeholder:text-coffee-secondary/50 focus:outline-none focus:border-coffee-accent"
            />
            <Button className="bg-coffee-accent text-coffee-primary hover:bg-coffee-accent/90">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscription;