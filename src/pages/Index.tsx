import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Subscription from "@/components/Subscription";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-coffee-secondary">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Events />
      <Contact />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Index;