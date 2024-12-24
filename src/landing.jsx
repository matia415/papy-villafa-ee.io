
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavItem = ({ href, children, isActive }) => (
  <a
    href={href}
    className={`text-gray-200 hover:text-white transition-colors duration-300 ${
      isActive ? "font-bold text-white" : ""
    }`}
  >
    {children}
  </a>
);

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sliderImages = [
    "lider.jpg",
    "grupo.jpg",
    "militancia.jpg",
    "jaldo.jpg",
  ];

  const facilitiesImages = [
    { src: "/desplegar.io/laboratorio.jpg", title: "Laboratorio de Ciencias" },
    { src: "/desplegar.io/biblioteca.jpg", title: "Biblioteca" },
    { src: "/desplegar.io/auditorio.jpg", title: "Auditorio" },
    { src: "/desplegar.io/cancha.jpg", title: "Gimnasio" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "inicio",
        "programas",
        "por-que-elegirnos",
        "instalaciones",
        "eventos",
        "contacto",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }

      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
 <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 font-sans">
    
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 font-sans">
  

  {/* Hero Section */}
  <section
  id="inicio"
  className="pt-24 pb-20 text-white text-center"
>
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl  text-black font-extrabold mb-6">
      Bienvenidos a la página oficial de
      <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
        PAPY VILLAFAÑE
      </span>
    </h1>
    <p className="text-lg md:text-xl text-black mb-8">
  Con años de experiencia como dirigente, comprometido con la
  comunidad y su gente.
</p>


    {/* Slider Section */}
    <div className="relative w-full">
      <Slider images={sliderImages} />
    </div>
  </div>
</section>

<nav className="fixed top-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 z-50 shadow-lg">
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <motion.div
          className="flex items-center flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" className="flex items-center">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <span className="ml-3 text-lg md:text-xl font-bold text-white">
              Líder Comunitario
            </span>
          </a>
        </motion.div>

        {/* Main Menu for larger screens */}
        <div className="hidden md:flex items-center justify-center flex-1 space-x-6">
          {[
            { href: "#trayectoria", label: "Trayectoria" },
            { href: "#Liderazgo", label: " Liderazgo" },
            { href: "#liderazgo", label: "Liderazgo" },
            { href: "#contacto", label: "Contacto" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-white hover:text-blue-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Hamburger Menu for smaller screens */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white p-3 rounded-md"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  </nav>

  <section id="trayectoria" className="pt-24 pb-20 bg-gradient-to-b from-blue-100 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 lg:mb-0"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Trayectoria
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Con más de 20 años de experiencia, nuestro líder ha trabajado incansablemente por su comunidad.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="lider.jpg"
            alt="Trayectoria"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  </section>

  <section id="Compromiso" className="pt-24 pb-20 bg-gradient-to-b from-blue-100 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 lg:mb-0"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Compromiso con la Comunidad
          </h1>
          <p className="text-xl text-gray-600 mb-8">
          Nuestro líder ha sido un pilar fundamental para el desarrollo social, llevando a cabo múltiples proyectos para el bienestar de todos.

          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="accionsocial.jpg"
            alt="Trayectoria"
            className="rounded-lg shadow-lg w-[600px] h-[400px]"
          />
        </motion.div>
      </div>
    </div>
  </section>
  
  <section id="Lider" className="pt-24 pb-20 bg-gradient-to-b from-blue-100 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 lg:mb-0"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Liderazgo

          </h1>
          <p className="text-xl text-gray-600 mb-8">
          Su habilidad para guiar y empoderar a otros lo convierte en un ejemplo a seguir dentro y fuera del partido.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="liderazgo.jpg"
            alt="Trayectoria"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  </section>

  
  <section id="equipo" className="pt-24 pb-20 bg-gradient-to-b from-blue-100 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 lg:mb-0"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Siempre poniendo el bienestar de su equipo en primer lugar.

          </h1>
          <p className="text-xl text-gray-600 mb-8">
          En estas épocas de fiestas, recordemos que cada desafío superado nos fortalece como equipo. Que el espíritu de unidad y compromiso que hemos compartido a lo largo del año nos impulse a seguir adelante con la misma pasión y esfuerzo. Juntos, alcanzamos grandes logros, y juntos, alcanzaremos aún más en el próximo año. ¡Felices fiestas y que el futuro nos encuentre más fuertes que nunca!
         
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="equipo.jpg"
            alt="Trayectoria" 
            className="rounded-lg shadow-lg  w-[600px] h-[500px]"
          />
        </motion.div>
      </div>


    </div>
  </section> 
  <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
  <div>
    <p className="text-blue-100 text-center">
      &copy; {new Date().getFullYear()} @matias Todos los derechos reservados.
    </p>
  </div>
</footer>

 



</div>

  <nav className="fixed top-0 w-full bg-gradient-to-r from-blue-800 to-black z-50 shadow-lg">
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <motion.div
          className="flex items-center flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
         <a href="#" className="flex items-center">
  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-blue-800 overflow-hidden">
    <img
      src="logo.jpg" // Cambia "logo.jpg" por la ruta a tu imagen
      alt="Logo"
      className="w-full h-full object-cover"
    />
  </div>
  <span className="ml-3 text-lg md:text-xl font-bold text-white">
    PAPY VILLAFAÑE
  </span>
</a>

        </motion.div>

        {/* Main Menu for larger screens */}
        <div className="hidden md:flex items-center justify-center flex-1 space-x-6">
          {[
            { href: "#inicio", label: "Inicio" },
            { href: "#trayectoria", label: "trayectoria" },
            { href: "#Compromiso", label: "Compromiso " },
            { href: "#Lider", label: "Lider" },
            { href: "#equipo", label: "equipo" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm md:text-base lg:text-lg text-white hover:text-blue-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
        </div>
      </div>
    </div>
  </nav>
    
 



    </div>








  );
};

export default LandingPage;
