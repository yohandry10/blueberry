import React, { useEffect, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Auto-play: avanza automáticamente cada 5 segundos
  useEffect(() => {
    const autoplay = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  // Imágenes locales en la carpeta public
  const images = [
    {
      url: "/pastel.jpeg",
      title: "Pastel de Arándanos",
      description: "Un pastel suave y esponjoso, perfecto para el postre."
    },

    {
      url: "/smothie.jpeg",
      title: "Smoothie Energético",
      description: "Un batido revitalizante lleno de nutrientes."
    },
    {
      url: "/tarta.webp",
      title: "Tarta de Arándanos",
      description: "Una tarta clásica con un toque moderno de arándanos."
    },
    {
      url: "/muffins.jpeg",
      title: "Muffins de Arándanos",
      description: "Pequeños y deliciosos, ideales para cualquier momento."
    },
    {
      url: "/yogurt.jpeg",
      title: "Parfait de Yogur y Arándanos",
      description: "Capas de yogur, granola y arándanos frescos."
    },
    {
      url: "/helado.jpeg",
      title: "Helado Artesanal",
      description: "Helado cremoso infusionado con arándanos naturales."
    },
    {
      url: "/crepes.jpeg",
      title: "Crepes de Arándanos",
      description: "Delgadas crepes rellenas de salsa de arándanos."
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Encabezado de la galería */}
          <div className="text-center">
            <motion.h2
              className="text-5xl font-extrabold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Recetas con Arándanos
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explora una colección de recetas innovadoras y deliciosas donde el arándano es el protagonista.
            </motion.p>
          </div>

          {/* Carrusel de imágenes */}
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {images.map((image, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-xl"
                      whileHover={{ scale: 1.01 }}
                    >
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-300"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
                      >
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <h3 className="text-3xl font-bold text-white mb-2">
                            {image.title}
                          </h3>
                          <p className="text-lg text-gray-200">
                            {image.description}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Botones de navegación con flechas moradas */}
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg transition-transform duration-300 hover:bg-purple-700 hover:scale-110"
            >
              <ChevronLeft className="w-7 h-7 text-purple-700 transition-colors duration-300 hover:text-white" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg transition-transform duration-300 hover:bg-purple-700 hover:scale-110"
            >
              <ChevronRight className="w-7 h-7 text-purple-700 transition-colors duration-300 hover:text-white" />
            </button>

            {/* Indicadores */}
            <div className="flex justify-center mt-8 space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? 'bg-purple-700 w-6 h-3'
                      : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
