import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
