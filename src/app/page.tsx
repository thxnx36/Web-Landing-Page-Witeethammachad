import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductList from '@/components/ProductList';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <Features />
        <div id="products">
          <ProductList />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
