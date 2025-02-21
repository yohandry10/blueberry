import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Leaf } from 'lucide-react';

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* TÍTULO Y DESCRIPCIÓN */}
          <div className="text-center">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros Productos Premium
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Descubre nuestra gama de productos de arándanos liofilizados, elaborados con cuidado y llenos de nutrientes.
            </motion.p>
          </div>

          {/* GRID DE PRODUCTOS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProductCard
              title="Berries Liofilizados"
              price="S/31"
              weight="30gr"
              image="/1.png"
              features={[
                '100% Natural',
                'Rico en Antioxidantes',
                'Sin Aditivos',
                'Calidad Premium',
                'Larga Duración sin Conservantes',
                'Excelente para Desayunos y Snacks',
                'Compatible con Dietas Keto y Veganas',
              ]}
            />
            <ProductCard
              title="Polvo de Arándano Liofilizado 100gr"
              price="S/31"
              weight="100gr"
              image="/3.png"
              features={[
                'Ahorro al Por Mayor',
                'Ideal para Negocios',
                'Empaque Resellable',
                'Descuento por Volumen',
                'Alta Concentración de Nutrientes',
                'Compatible con Dietas Keto y Veganas',
              ]}
            />
            <ProductCard
              title="Polvo de Arándano Liofilizado"
              price="S/82"
              weight="250gr"
              image="/4.png"
              features={[
                'Ahorro al Por Mayor',
                'Ideal para Negocios',
                'Empaque Resellable',
                'Descuento por Volumen',
                'Alta Concentración de Nutrientes',
                'Compatible con Dietas Keto y Veganas',
              ]}
            />
            <ProductCard
              title="Polvo de Arándano Liofilizado"
              price="S/155"
              weight="500 gr"
              image="/5.png"
              features={[
                'Incluye Variados Sabores',
                'Perfecto para Compartir',
                'Alta Concentración de Nutrientes',
                'Presentación en Bolsa Resellable',
                'Ideal para Negocios',
                'Compatible con Dietas Keto y Veganas',
              ]}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProductCard = ({
  title,
  price,
  weight,
  image,
  features,
}: {
  title: string;
  price: string;
  weight: string;
  image: string;
  features: string[];
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden transition-all duration-500 transform hover:-translate-y-1"
    >
      {/* Imagen del producto */}
      <div className="relative w-full aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-2 transition-transform duration-500 transform group-hover:scale-105"
        />
      </div>

      {/* Contenido del producto */}
      <div className="p-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{title}</h3>
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-purple-600">{price}</span>
          <span className="text-gray-500">{weight}</span>
        </div>

        <ul className="space-y-1 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600 text-sm">
              <Leaf className="w-4 h-4 mr-1 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Botón "Comprar" con el mismo tamaño y estilos que los botones en Hero */}
        <a
          href="https://wa.me/51998223938"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block w-64 overflow-hidden rounded-full bg-gray-700"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          <span className="relative block py-4 text-white font-semibold tracking-wide transition-all duration-500 group-hover:scale-105 text-center">
            Comprar
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export default Products;
