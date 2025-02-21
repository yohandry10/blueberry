import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// Componente SVG de arándano interactivo (en la esquina superior derecha)
// Los colores del degradado son tonos azules
const FloatingBlueberry = ({ delay = 0, style = {} }) => (
  <motion.svg
    width="70"
    height="70"
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    initial={{ y: 0, scale: 0.95 }}
    animate={{ y: [0, -20, 0], scale: [0.95, 1, 0.95] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    whileHover={{ rotate: 360, scale: 1.2 }}
  >
    <defs>
      <linearGradient id="blueberryGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#16213E" />
        <stop offset="100%" stopColor="#1F4068" />
      </linearGradient>
    </defs>
    <circle cx="35" cy="35" r="30" fill="url(#blueberryGradient)" />
  </motion.svg>
);

// Componente para revelar el texto letra por letra con efecto 3D
const AnimatedText = ({ text, className, delay = 0 }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: delay },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 30, scale: 0.8, rotateX: 90 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { type: 'spring', stiffness: 500, damping: 30 },
    },
  };

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Fondo animado con overlays y efecto parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/blue.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay con degradado púrpura a azul */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 to-blue-900/70 mix-blend-multiply" />
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.02), rgba(0,0,0,0.1))',
            backgroundSize: '300% 300%',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* SVG interactivo en la esquina superior derecha */}
      <div className="absolute top-4 right-4 z-20">
        <FloatingBlueberry delay={0} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Título con efecto reveal avanzado */}
          <AnimatedText
            text="Polvo de Arándanos"
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
            delay={0.2}
          />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            {/* Se deja "Premium Liofilizado" como estaba originalmente */}
            <AnimatedText
              text="Premium Liofilizado"
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
              delay={1}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200"
          >
            100% Natural, Rico en Nutrientes
            <br />
            Perfecto para Batidos, Repostería y Más
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            {/* Botones con efecto de llenado y transiciones sorprendentes, mismos tamaños */}
            <a
              href="#products"
              className="group relative inline-block w-64 overflow-hidden rounded-full bg-gray-700"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <span className="relative block py-4 text-white font-semibold tracking-wide transition-all duration-500 group-hover:scale-105 text-center">
                Explorar Productos
              </span>
            </a>

            <a
              href="#benefits"
              className="group relative inline-block w-64 overflow-hidden rounded-full bg-gray-700"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <span className="relative block py-4 text-white font-semibold tracking-wide transition-all duration-500 group-hover:scale-105 text-center">
                Conocer Más
              </span>
            </a>
          </motion.div>

          {/* Flecha reposicionada justo debajo de los botones */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 2.2, duration: 1.5, repeat: Infinity }}
            className="mt-8"
          >
            <ArrowDown className="w-10 h-10 animate-bounce mx-auto" />
          </motion.div>
        </motion.div>
      </div>

      {/* Elementos flotantes adicionales: todos en tonos azules */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/5 w-20 h-20 bg-blue-500/30 backdrop-blur-md rounded-full"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -10, 10, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-blue-500/30 backdrop-blur-md rounded-full"
      />
      <motion.div
        animate={{
          x: [0, 20, 0],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-10 right-10 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full"
      />
    </section>
  );
};

export default Hero;
