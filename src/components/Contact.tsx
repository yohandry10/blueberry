import React, { useState } from 'react';
import { motion, Variants, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Variants para animaciones
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, when: 'beforeChildren', staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const inputVariants: Variants = {
  rest: { scale: 1 },
  focus: { scale: 1.03, boxShadow: '0 0 8px rgba(17,24,41,0.5)' } // #111829 en rgba aproximado
};

// Fondo de gradiente animado en tonos de #111829 y negro con máscara para bordes sutiles
const AnimatedGradientBackground = () => {
  const gradientVariants: Variants = {
    animate: {
      background: [
        'linear-gradient(135deg, #111829, #000)',
        'linear-gradient(135deg, #000, #111829)',
        'linear-gradient(135deg, #111829, #000)'
      ]
    }
  };
  return (
    <motion.div
      className="absolute inset-0 -z-10"
      variants={gradientVariants}
      animate="animate"
      transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
      style={{
        maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 70%)",
        WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 70%)"
      }}
    />
  );
};

// Fondos interactivos (parallax) con blobs que incluyen bordes oscuros
const InteractiveBackgroundShapes = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x1 = useTransform(mouseX, [-100, 100], [-20, 20]);
  const y1 = useTransform(mouseY, [-100, 100], [-20, 20]);
  const x2 = useTransform(mouseX, [-100, 100], [20, -20]);
  const y2 = useTransform(mouseY, [-100, 100], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX - window.innerWidth / 2);
    mouseY.set(clientY - window.innerHeight / 2);
  };

  return (
    <motion.div className="absolute inset-0 -z-10" onMouseMove={handleMouseMove}>
      {/* Blob 1 con borde oscuro */}
      <motion.div
        className="absolute top-[-80px] left-[-80px] w-[200px] h-[200px] text-[#111829] opacity-30"
        style={{ x: x1, y: y1 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
      >
        <motion.svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
        >
          <path
            fill="currentColor"
            stroke="#000"
            strokeWidth="2"
            d="M40.1,-67.6C52.7,-59.4,64.2,-50.2,72.8,-38.1C81.4,-26.1,87.2,-11,83.7,2.2C80.2,15.4,67.4,26.8,56.7,37.8C46,48.9,37.4,59.7,25.4,66.4C13.3,73.1,-2.2,75.8,-15.7,72.4C-29.3,68.9,-40.9,59.4,-50.4,47.4C-60,35.3,-67.5,20.6,-68.6,5.6C-69.6,-9.3,-64.2,-24.6,-55.6,-35.3C-47.1,-45.9,-35.4,-52,-23.1,-59.6C-10.9,-67.1,2,-76.2,14.5,-79C27,-81.8,40.1,-78.6,40.1,-67.6Z"
            transform="translate(100 100)"
          />
        </motion.svg>
      </motion.div>
      {/* Blob 2 con borde oscuro */}
      <motion.div
        className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] text-[#111829] opacity-30"
        style={{ x: x2, y: y2 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
      >
        <motion.svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          animate={{ rotate: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror' }}
        >
          <path
            fill="currentColor"
            stroke="#000"
            strokeWidth="2"
            d="M39.3,-69.2C53.4,-60.7,67.3,-50.2,71.5,-36.3C75.7,-22.4,70.1,-5.1,62.3,8.2C54.4,21.5,44.2,30.8,33.2,39.5C22.2,48.2,10.1,56.2,-2.2,59.1C-14.5,62.1,-29.1,59.9,-37.7,51.3C-46.4,42.8,-49.1,27.9,-50.9,13.2C-52.7,-1.6,-53.7,-16.1,-48.6,-27.4C-43.6,-38.7,-32.5,-46.9,-20.4,-55.6C-8.3,-64.4,4.9,-73.6,19.5,-77.3C34.2,-81,50.3,-79.2,39.3,-69.2Z"
            transform="translate(100 100)"
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};

// Línea subrayada blanca con sutil borde oscuro
const GradientUnderline = () => {
  return (
    <motion.div
      className="h-1 w-24 rounded-full mt-2 border border-gray-800"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{ background: '#ffffff' }}
    />
  );
};

// Efecto de confeti al enviar el formulario
const ConfettiExplosion = () => {
  const confettiCount = 30;
  const colors = ['#B388EB', '#9575CD', '#CE93D8', '#E1BEE7', '#AB47BC', '#BA68C8'];
  const confettiItems = Array.from({ length: confettiCount }, (_, index) => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    const randomRotate = Math.random() * 360;
    const randomDelay = Math.random() * 0.3;
    const randomSize = Math.random() * 6 + 4;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
      <motion.div
        key={index}
        className="absolute rounded-full"
        style={{
          width: randomSize,
          height: randomSize,
          backgroundColor: randomColor,
          top: '50%',
          left: '50%'
        }}
        initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
        animate={{ opacity: 0, x: randomX, y: randomY, rotate: randomRotate }}
        transition={{ duration: 1.5, delay: randomDelay, ease: 'easeOut' }}
      />
    );
  });
  return <div className="absolute inset-0 pointer-events-none">{confettiItems}</div>;
};

// Mensaje de éxito
const SuccessMessage = () => (
  <motion.div
    className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-[#111829] text-white px-6 py-3 rounded-full shadow-xl flex items-center space-x-3 z-50"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
  >
    <Check className="w-6 h-6" />
    <span>¡Mensaje enviado!</span>
  </motion.div>
);

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Envía el email usando EmailJS con el nuevo Template ID: template_wjf7psc
    emailjs
      .send(
        'service_e9flubp', // SERVICE ID
        'template_wjf7psc', // NUEVO TEMPLATE ID
        {
          from_name: formData.name,
          telefono: formData.phone,
          correo: formData.email,
          to_name: 'Lioberries',
          message: `Nombre: ${formData.name}\nCorreo: ${formData.email}\nTeléfono: ${formData.phone}`
        },
        'iIXUZ8aE9JfbI0LFp' // PUBLIC KEY
      )
      .then(
        (result) => {
          console.log('Email enviado', result.text);
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 3000);
          setFormData({ name: '', phone: '', email: '' });
        },
        (error) => {
          console.error('Error al enviar el email:', error.text);
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="relative py-10 overflow-hidden">
      <AnimatedGradientBackground />
      <InteractiveBackgroundShapes />

      <AnimatePresence>
        {submitted && <ConfettiExplosion key="confetti" />}
        {submitted && <SuccessMessage key="success" />}
      </AnimatePresence>

      <motion.div
        className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* FILA 1: Información e imagen */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
          {/* Columna izquierda (60%): Misión y Visión */}
          <motion.div className="md:w-3/5 space-y-6" variants={itemVariants}>
            <div>
              <h2 className="text-4xl font-extrabold text-white hover:scale-105 transition-transform">
                Contáctanos
              </h2>
              <GradientUnderline />
              <p className="text-xl text-white mt-3">
                Si tienes preguntas o necesitas más información, estamos aquí para ayudarte.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-xl text-white">
                <strong>MISIÓN:</strong> Nuestra misión es liderar la producción y exportación de superalimentos de alta calidad, ofreciendo productos naturales y nutritivos en todo el mundo. Estamos comprometidos con la sostenibilidad, la ética y el bienestar de las personas, mientras nos esforzamos por la excelencia y la innovación.
              </p>
              <p className="text-xl text-white">
                <strong>VISIÓN:</strong> Nuestra visión es ser un referente global en superalimentos, reconocidos por su calidad excepcional y compromiso con la sostenibilidad. Aspiramos a liderar en innovación y contribuir al bienestar de las comunidades locales, convirtiéndonos en una marca confiable y valiosa que mejora la calidad de vida de las personas y respeta el planeta.
              </p>
            </div>
          </motion.div>
          {/* Columna derecha (40%): Imagen */}
          <motion.div
            className="md:w-2/5 overflow-hidden rounded-xl shadow-xl self-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <motion.img
              src="/aranda.jpeg"
              alt="Contacto"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1, rotate: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>

        {/* FILA 2: FORMULARIO SIN CARD */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto space-y-4"
          variants={itemVariants}
        >
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Nombre
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-[#111829]"
              variants={inputVariants}
              initial="rest"
              whileFocus="focus"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="phone" className="block text-sm font-medium text-white">
              Número de teléfono
            </label>
            <motion.input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-[#111829]"
              variants={inputVariants}
              initial="rest"
              whileFocus="focus"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Correo electrónico
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-[#111829]"
              variants={inputVariants}
              initial="rest"
              whileFocus="focus"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-[#111829] to-[#000] text-white rounded-md font-semibold flex items-center justify-center space-x-2 shadow-md text-sm border border-gray-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            <span>Enviar Mensaje</span>
            <Send className="w-4 h-4" />
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
