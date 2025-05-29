import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import About from "@/components/sections/about";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Clients from "@/components/sections/clients";
import Certifications from "@/components/sections/certifications";
import FAQ from "@/components/sections/faq";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Clients />
        <Certifications />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
