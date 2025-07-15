import React from "react";
import { HeroParallax } from "./components/blocks/HeroParallax";
import { products } from "./data/products";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <main className="min-h-screen bg-black text-white">
      <HeroParallax products={products} />
    </main>
    <Footer/>
    </div>

  );
}

export default App;
