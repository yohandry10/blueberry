import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';

const sampleProduct = {
  id: "1",
  title: "Polvo de Arándanos Premium",
  price: "$24.99",
  weight: "100g",
  image: "/arandanos.jpeg", // Ruta actualizada para cargar la imagen desde public
  description: "Nuestro polvo de arándanos premium está elaborado mediante un proceso de liofilización que preserva todos los nutrientes y el sabor natural de los arándanos frescos.",
  benefits: [
    "Alto contenido en antioxidantes",
    "Mejora la salud cardiovascular",
    "Fortalece el sistema inmunológico",
    "Propiedades antiinflamatorias",
    "Mejora la salud visual"
  ],
  ingredients: [
    "100% Arándanos liofilizados",
    "Sin aditivos",
    "Sin conservantes",
    "Sin azúcares añadidos"
  ],
  nutritionalInfo: [
    { label: "Calorías", value: "350kcal/100g" },
    { label: "Proteínas", value: "0.7g" },
    { label: "Carbohidratos", value: "87g" },
    { label: "Azúcares", value: "40g" },
    { label: "Fibra", value: "7.5g" },
    { label: "Grasas", value: "0.3g" }
  ]
};

function App() {
  return (
    <AnimatePresence>
      <div className="relative">
        <Navbar />
        <main className="relative">
          <Hero />
          <Benefits />
          <Products />
          <ProductDetails product={sampleProduct} />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
