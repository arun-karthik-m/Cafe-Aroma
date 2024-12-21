import { Calendar, Tag } from "lucide-react";
import { Button } from "./ui/button";

const events = [
  {
    title: "Jazz Night",
    date: "Every Friday",
    description: "Live jazz music while you enjoy your favorite coffee",
    type: "event",
  },
  {
    title: "Happy Hour",
    description: "50% off on all specialty drinks",
    time: "3 PM - 5 PM Daily",
    type: "offer",
  },
  {
    title: "Coffee Workshop",
    date: "First Saturday of every month",
    description: "Learn the art of coffee making from our expert baristas",
    type: "event",
  },
];

const Events = () => {
  return (
    <section id="events" className="py-20 bg-coffee-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-coffee-primary text-center mb-16">
          Events & Offers
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {item.type === "event" ? (
                  <Calendar className="h-6 w-6 text-coffee-accent mr-2" />
                ) : (
                  <Tag className="h-6 w-6 text-coffee-accent mr-2" />
                )}
                <h3 className="text-xl font-bold text-coffee-primary">
                  {item.title}
                </h3>
              </div>
              <p className="text-coffee-text mb-4">{item.description}</p>
              {item.date && (
                <p className="text-coffee-accent font-medium">{item.date}</p>
              )}
              {item.time && (
                <p className="text-coffee-accent font-medium">{item.time}</p>
              )}
              <Button className="mt-4 w-full bg-coffee-primary text-coffee-secondary hover:bg-coffee-dark">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;