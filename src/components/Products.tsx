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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              ]}
            />
            <ProductCard
              title="Polvo de Arándano Liofilizado 100gr"
              price="S/31"
              weight='100gr'
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
              weight='250gr'
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
                'Excelente para Repostería',
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
      className="group relative bg-white rounded-2xl shadow-xl overflow-hidden
                 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
    >
      {/* CONTENEDOR DE LA IMAGEN CON RELACIÓN DE ASPECTO */}
      <div className="relative w-full aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-2
                     transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* CONTENIDO DE LA TARJETA */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl font-bold text-purple-600">{price}</span>
          <span className="text-gray-500">{weight}</span>
        </div>

        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <Leaf className="w-5 h-5 mr-2 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>

        {/* El botón "Comprar" redirige a WhatsApp */}
        <a
          href="https://wa.me/51998223938"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg
                     font-semibold transform hover:scale-105 transition-all duration-300
                     hover:shadow-lg group-hover:shadow-purple-500/25 text-center"
        >
          Comprar
        </a>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl
                     group-hover:bg-purple-500/20 transition-all duration-500" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl
                     group-hover:bg-blue-500/20 transition-all duration-500" />
    </motion.div>
  );
};

export default Products;
