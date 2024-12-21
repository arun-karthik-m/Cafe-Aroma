import { Coffee } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "The best coffee I've ever had! The atmosphere is perfect for both work and relaxation.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    text: "Their baristas are true artists. Every cup is crafted with passion and expertise.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    text: "A cozy spot with amazing pastries and even better coffee. My go-to place!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-coffee-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-coffee-primary text-center mb-16">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-coffee-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-center mb-4">
                <Coffee className="h-8 w-8 text-coffee-accent" />
              </div>
              <p className="text-coffee-text mb-4 italic">{testimonial.text}</p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-coffee-primary">
                  {testimonial.name}
                </span>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-coffee-accent">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;