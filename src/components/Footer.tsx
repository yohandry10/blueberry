import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';

// Componente que renderiza el icono de WhatsApp a partir de un archivo SVG ubicado en public/ws.svg
const WhatsAppIcon = (props) => (
  <motion.img
    src="/ws.svg"
    alt="WhatsApp"
    {...props}
    initial={{ filter: 'brightness(0.8) invert(0.8)' }}
    whileHover={{ filter: 'brightness(1.5) invert(1)' }}
    transition={{ duration: 0.5, ease: 'ease-out' }}
  />
);

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Fondo animado: degradado de negro a azul oscuro (#111829) */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #000 0%, #000 80%, #111829 80%, #111829 100%)',
          backgroundSize: '200% 200%',
        }}
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ backgroundPosition: '100% 100%' }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Columna 1: Lioberries – Información y redes sociales */}
          <div>
            <motion.h3
              className="text-2xl font-bold bg-gradient-to-r from-[#111829] to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Lioberries
            </motion.h3>
            <motion.p
              className="text-gray-400 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              100% Natural, Rico en Nutrientes
              <br />
              Perfecto para Batidos, Repostería y Más.
            </motion.p>
            <div className="flex space-x-4 mt-4">
              <SocialLink
                href="https://www.facebook.com/profile.php?id=61573073833477"
                icon={
                  <Facebook className="relative text-gray-300 group-hover:text-white transition-colors duration-500 ease-out w-5 h-5" />
                }
                delay={0.6}
              />
              <SocialLink
                href="https://wa.me/51998223938"
                icon={
                  <WhatsAppIcon className="w-5 h-5 object-contain relative transition-colors duration-500 ease-out" />
                }
                delay={0.8}
              />
              <SocialLink
                href="https://www.instagram.com/lioberries.empresa/"
                icon={
                  <Instagram className="relative text-gray-300 group-hover:text-white transition-colors duration-500 ease-out w-5 h-5" />
                }
                delay={1.0}
              />
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <motion.h4
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Enlaces Rápidos
            </motion.h4>
            <ul className="space-y-2">
              <FooterLink href="#home" delay={0.4}>
                Inicio
              </FooterLink>
              <FooterLink href="#products" delay={0.5}>
                Productos
              </FooterLink>
              <FooterLink href="#benefits" delay={0.6}>
                Beneficios
              </FooterLink>
              <FooterLink href="#gallery" delay={0.7}>
                Galería
              </FooterLink>
              <FooterLink href="#contact" delay={0.8}>
                Contacto
              </FooterLink>
            </ul>
          </div>

          {/* Columna 3: Productos */}
          <div>
            <motion.h4
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Productos
            </motion.h4>
            <ul className="space-y-2">
              <FooterLink href="#premium" delay={0.6}>
                Polvo Premium
              </FooterLink>
              <FooterLink href="#bulk" delay={0.7}>
                Paquete a Granel
              </FooterLink>
              <FooterLink href="#sample" delay={0.8}>
                Pack de Muestra
              </FooterLink>
              <FooterLink href="#wholesale" delay={0.9}>
                Venta al Por Mayor
              </FooterLink>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <motion.h4
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Contacto
            </motion.h4>
            <motion.div
              className="text-gray-400 space-y-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p>
                Si tienes preguntas o necesitas más información, estamos aquí para ayudarte.
              </p>
              <p>
                <span className="font-semibold">Correo electrónico: </span>
                <a href="mailto:ventas@lioberries.com" className="hover:underline">
                  ventas@lioberries.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Teléfono: </span>
                926488220
              </p>
              <p>
                <span className="font-semibold">Dirección: </span>
                Av. La Molina 123, La Molina
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Sección inferior sin línea divisoria */}
        <motion.div
          className="py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              © 2025 Lioberries. Todos los derechos reservados.
            </motion.p>
            <div className="flex space-x-6">
              <FooterLink href="/privacy" delay={1.3} className="text-white">
                Política de Privacidad
              </FooterLink>
              <FooterLink href="/terms" delay={1.4} className="text-white">
                Términos del Servicio
              </FooterLink>
              <FooterLink href="/shipping" delay={1.5} className="text-white">
                Política de Envío
              </FooterLink>
            </div>
          </div>
        </motion.div>

        {/* Texto añadido: by Yohandry Chirinos programador web fullstack */}
        <motion.p
          className="text-center text-white mt-4 text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <a
            href="mailto:yohandrychirinos1@gmail.com"
            className="hover:underline"
          >
            by Yohandry Chirinos programador web fullstack
          </a>
        </motion.p>
      </div>

      {/* SVG decorativo en la parte inferior */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <path
          d="M0,80 C360,0 1080,160 1440,80 L1440,120 L0,120 Z"
          fill="#111829"
        />
      </motion.svg>
    </footer>
  );
};

const SocialLink = ({ href, icon, delay = 0 }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group overflow-hidden"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex items-center justify-center w-16 h-16 border-2 border-[#111829] rounded-full transition duration-500 ease-out relative overflow-hidden group-hover:bg-[#111829]">
      {/* Efecto de llenado con gradiente */}
      <span className="absolute inset-0 bg-gradient-to-t from-[#111829] to-black rounded-full transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out" />
      {icon}
    </div>
  </motion.a>
);

const FooterLink = ({ href, children, delay = 0, className }) => (
  <motion.li
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay }}
  >
    <a
      href={href}
      className={`${
        className ? className : 'text-gray-400 hover:text-white'
      } transition-colors duration-300`}
    >
      {children}
    </a>
  </motion.li>
);

export default Footer;
