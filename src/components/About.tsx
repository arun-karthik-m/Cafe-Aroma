import { Bean, Droplet, Coffee } from "lucide-react";

const features = [
  {
    icon: Bean,
    title: "Premium Beans",
    description: "Sourced from the finest coffee regions worldwide",
  },
  {
    icon: Droplet,
    title: "Expert Brewing",
    description: "Crafted by skilled baristas with passion",
  },
  {
    icon: Coffee,
    title: "Perfect Atmosphere",
    description: "A cozy space to enjoy your perfect cup",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-coffee-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-primary mb-4">Our Story</h2>
          <p className="text-coffee-text">
            Since 2010, we've been crafting exceptional coffee experiences. Every cup tells a
            story of dedication, passion, and the pursuit of coffee perfection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-coffee-secondary p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              <feature.icon className="h-12 w-12 mx-auto text-coffee-accent mb-4" />
              <h3 className="text-xl font-bold text-coffee-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-coffee-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;