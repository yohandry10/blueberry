import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Leaf, Award, ShieldCheck, Recycle, Clock } from 'lucide-react';

const Benefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  // Variantes para el título interactivo:
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 120, damping: 20 },
    },
    hover: {
      scale: 1.05,
      textShadow: '0px 0px 8px rgba(59,130,246,0.8)',
      background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
    },
    tap: { scale: 0.95 },
  };

  const benefits = [
    {
      icon: <Heart className="w-10 h-10 text-red-500" />,
      title: "Beneficios para la salud",
      description: "Rico en antioxidantes y nutrientes esenciales para el bienestar general.",
    },
    {
      icon: <Leaf className="w-10 h-10 text-green-500" />,
      title: "100% natural",
      description: "Arándanos liofilizados puros sin aditivos ni conservantes.",
    },
    {
      icon: <Award className="w-10 h-10 text-yellow-500" />,
      title: "Calidad premium",
      description: "El más alto estándar en procesamiento y empaque.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
      title: "Certificado",
      description: "Cumple con estándares internacionales de seguridad y calidad.",
    },
    {
      icon: <Recycle className="w-10 h-10 text-green-600" />,
      title: "Eco-amigable",
      description: "Empaque sostenible y prácticas de producción responsables.",
    },
    {
      icon: <Clock className="w-10 h-10 text-purple-500" />,
      title: "Larga duración",
      description: "Frescura preservada mediante tecnología de liofilización.",
    },
  ];

  return (
    <section
      id="benefits"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-16 md:space-y-20"
        >
          <div className="text-center px-4">
            <motion.h2
              variants={titleVariants}
              whileHover="hover"
              whileTap="tap"
              className="whitespace-normal sm:whitespace-nowrap text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900"
              style={{ letterSpacing: '0.03em' }}
            >
              ¿Por qué elegir nuestro polvo de arándanos?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Descubre la pureza premium de nuestros arándanos liofilizados, cuidadosamente procesados para preservar toda su vitalidad.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-200"
              >
                <div className="flex items-start space-x-4 sm:space-x-5 relative z-10">
                  <div className="bg-white p-3 sm:p-4 rounded-full shadow-sm">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1 sm:mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02))',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;

