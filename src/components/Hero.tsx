import { Coffee } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-coffee-secondary to-coffee-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <Coffee className="h-16 w-16 mx-auto text-coffee-primary" />
          <h1 className="text-5xl md:text-7xl font-bold text-coffee-primary">
            Brewed to Perfection
          </h1>
          <p className="text-xl text-coffee-text">
            Experience the art of coffee crafting in every cup. Join us for an unforgettable
            journey through flavors and aromas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
