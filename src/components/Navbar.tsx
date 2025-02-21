import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            {/* Logo sin fondo extra, recortado para mostrar solo el arándano */}
            <motion.img
              src="/Blueberry.png"
              alt="Lioberries Logo"
              className="w-32 object-contain bg-transparent"
              style={{ clipPath: 'ellipse(45% 30% at 50% 50%)' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            />
          </div>

          {/* Menú de escritorio */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink href="#home" scrolled={scrolled}>
                Inicio
              </NavLink>
              <NavLink href="#products" scrolled={scrolled}>
                Productos
              </NavLink>
              <NavLink href="#benefits" scrolled={scrolled}>
                Beneficios
              </NavLink>
              <NavLink href="#contact" scrolled={scrolled}>
                Contacto
              </NavLink>
            </div>
          </div>

          {/* Botón de menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#111829] hover:text-[#111829]/80"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil con fondo claro y texto oscuro */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>
              Inicio
            </MobileNavLink>
            <MobileNavLink href="#products" onClick={() => setIsOpen(false)}>
              Productos
            </MobileNavLink>
            <MobileNavLink href="#benefits" onClick={() => setIsOpen(false)}>
              Beneficios
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
              Contacto
            </MobileNavLink>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const NavLink = ({ href, children, scrolled }) => (
  <a
    href={href}
    className={`px-4 py-3 rounded-md text-lg font-medium transition-colors relative group ${
      scrolled
        ? 'bg-gradient-to-r from-[#111829] to-blue-400 bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-[#111829] hover:to-blue-400'
        : 'text-white hover:text-gray-300'
    }`}
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#111829] to-blue-400 transform scale-x-0 transition-transform group-hover:scale-x-100" />
  </a>
);

const MobileNavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-[#111829] to-blue-400 bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-[#111829] hover:to-blue-400 transition-colors"
  >
    {children}
  </a>
);

export default Navbar;
