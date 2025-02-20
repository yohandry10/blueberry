import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Fondo animado: degradado de negro a morado (#8e44ad) */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #000 0%, #000 80%, #8e44ad 80%, #8e44ad 100%)',
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
              className="text-2xl font-bold bg-gradient-to-r from-[#8e44ad] to-blue-400 bg-clip-text text-transparent"
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
              <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} delay={0.6} />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} delay={0.8} />
              <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} delay={1.0} />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} delay={1.2} />
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
              <FooterLink href="#home" delay={0.4}>Inicio</FooterLink>
              <FooterLink href="#products" delay={0.5}>Productos</FooterLink>
              <FooterLink href="#benefits" delay={0.6}>Beneficios</FooterLink>
              <FooterLink href="#gallery" delay={0.7}>Galería</FooterLink>
              <FooterLink href="#contact" delay={0.8}>Contacto</FooterLink>
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
              <FooterLink href="#premium" delay={0.6}>Polvo Premium</FooterLink>
              <FooterLink href="#bulk" delay={0.7}>Paquete a Granel</FooterLink>
              <FooterLink href="#sample" delay={0.8}>Pack de Muestra</FooterLink>
              <FooterLink href="#wholesale" delay={0.9}>Venta al Por Mayor</FooterLink>
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
                <a href="mailto:ventas@blueberries.com" className="hover:underline">
                  ventas@blueberries.com
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

        {/* Sección inferior elevada: línea divisoria y navegación secundaria */}
        <motion.div
          className="border-t border-gray-800 py-8 -mt-4"
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
              <FooterLink href="/privacy" delay={1.3} className="text-white">Política de Privacidad</FooterLink>
              <FooterLink href="/terms" delay={1.4} className="text-white">Términos del Servicio</FooterLink>
              <FooterLink href="/shipping" delay={1.5} className="text-white">Política de Envío</FooterLink>
            </div>
          </div>
        </motion.div>
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
          fill="#8e44ad"
        />
      </motion.svg>
    </footer>
  );
};

const SocialLink = ({ href, icon, delay = 0 }: { href: string; icon: React.ReactNode; delay?: number; }) => (
  <motion.a
    href={href}
    className="relative group overflow-hidden"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex items-center justify-center w-16 h-16 border-2 border-[#8e44ad] rounded-full transition duration-500 ease-out relative overflow-hidden group-hover:bg-[#8e44ad]">
      {/* Efecto de llenado: el span se expande verticalmente con un sólido morado */}
      <span className="absolute inset-0 z-0 bg-gradient-to-t from-[#8e44ad] to-[#8e44ad] rounded-full transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out" />
      <span className="relative z-10 text-white">{icon}</span>
    </div>
  </motion.a>
);

const FooterLink = ({
  href,
  children,
  delay = 0,
  className,
}: {
  href: string;
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.li
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay }}
  >
    <a
      href={href}
      className={`${className ? className : 'text-gray-400 hover:text-white'} transition-colors duration-300`}
    >
      {children}
    </a>
  </motion.li>
);

export default Footer;
