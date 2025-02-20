import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Shield, Award, Leaf, Package, Truck } from 'lucide-react';

interface ProductDetailsProps {
  product: {
    id: string;
    title: string;
    price: string;
    weight: string;
    image: string;
    description: string;
    benefits: string[];
    ingredients: string[];
    nutritionalInfo: {
      label: string;
      value: string;
    }[];
  };
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Imagen del Producto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Badges flotantes */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg"
            >
              Premium
            </motion.div>
          </motion.div>

          {/* Información del Producto */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
              <p className="text-xl text-gray-600">{product.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-6"
            >
              <span className="text-4xl font-bold text-purple-600">{product.price}</span>
              <span className="text-lg text-gray-500">{product.weight}</span>
            </motion.div>

            {/* Características */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <Feature icon={<Shield className="w-6 h-6" />} title="100% Natural" />
              <Feature icon={<Star className="w-6 h-6" />} title="Alta Calidad" />
              <Feature icon={<Award className="w-6 h-6" />} title="Certificado" />
              <Feature icon={<Truck className="w-6 h-6" />} title="Envío Gratis" />
            </motion.div>

            {/* Botones de Acción */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex space-x-4"
            >
              <button className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg
                              font-semibold transform hover:scale-105 transition-all duration-300
                              shadow-lg hover:shadow-xl">
                Comprar Ahora
              </button>
              <button className="flex-1 py-4 border-2 border-purple-600 text-purple-600 rounded-lg
                              font-semibold transform hover:scale-105 transition-all duration-300
                              hover:bg-purple-50">
                Añadir al Carrito
              </button>
            </motion.div>

            {/* Información Nutricional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="border-t pt-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Información Nutricional</h3>
              <div className="grid grid-cols-2 gap-4">
                {product.nutritionalInfo.map((info, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{info.label}</span>
                    <span className="font-semibold">{info.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Beneficios e Ingredientes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Beneficios</h3>
            <ul className="space-y-4">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Leaf className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Ingredientes</h3>
            <ul className="space-y-4">
              {product.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <Package className="w-6 h-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="text-purple-600">{icon}</div>
    <span className="font-medium text-gray-800">{title}</span>
  </div>
);

export default ProductDetails;