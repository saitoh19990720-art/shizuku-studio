import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Works } from "./components/Works";
import { Process } from "./components/Process";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-page">
      <Header />
      <main>
        <Hero />
        <Services />
        <Works />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
