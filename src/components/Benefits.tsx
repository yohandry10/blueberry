import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Leaf, Award, ShieldCheck, Recycle, Clock } from 'lucide-react';

const Benefits = () => {
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

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Beneficios para la Salud",
      description: "Rico en antioxidantes y nutrientes esenciales para el bienestar general"
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "100% Natural",
      description: "Arándanos liofilizados puros sin aditivos ni conservantes"
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Calidad Premium",
      description: "Los más altos estándares en procesamiento y empaque"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      title: "Certificado",
      description: "Cumple con estándares internacionales de seguridad y calidad"
    },
    {
      icon: <Recycle className="w-8 h-8 text-green-600" />,
      title: "Eco-Amigable",
      description: "Empaque sostenible y prácticas de producción responsables"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: "Larga Duración",
      description: "Frescura preservada mediante tecnología de liofilización"
    }
  ];

  // SVG Decorativo animado
  const DecorativeSVG = () => (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      className="absolute -z-10 opacity-10"
      animate={{
        rotate: 360,
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
    </motion.svg>
  );

  return (
    <section id="benefits" className="py-20 bg-white relative overflow-hidden">
      {/* SVGs Decorativos */}
      <div className="absolute top-20 left-20 text-purple-600">
        <DecorativeSVG />
      </div>
      <div className="absolute bottom-20 right-20 text-blue-600">
        <DecorativeSVG />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <div className="text-center relative">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              ¿Por qué Elegir Nuestro Polvo de Arándanos?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Experimenta el poder puro de la naturaleza con nuestro polvo de arándanos liofilizado premium
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500
                         hover:-translate-y-2 overflow-hidden"
              >
                <div className="flex items-start space-x-4 relative z-10">
                  <div className="bg-white p-3 rounded-lg shadow-md">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                
                {/* Efecto de gradiente en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;