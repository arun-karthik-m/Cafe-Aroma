import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-coffee-secondary">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Footer />
    </div>
  );
};

export default Index;