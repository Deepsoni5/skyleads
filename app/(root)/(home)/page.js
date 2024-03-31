import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";

export const metadata = {
  title: "Home | SkyLeads",
};
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
