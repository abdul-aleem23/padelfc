import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo-one.svg'
import { handleSmoothScroll } from '../utils/smoothScroll'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Mobile Header - Completely separate, fixed at top */}
      <motion.div 
        className="md:hidden fixed top-0 left-0 right-0 z-60 flex justify-between items-center w-full px-6 pt-8 pb-5"
        style={{ 
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0) 100%)',
          height: 'auto',
          minHeight: '100px'
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Logo - Top Left with white color */}
        <motion.div 
          className="flex-shrink-0 pl-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <img 
            src={logo} 
            alt="Padel FC Logo" 
            className="h-20 w-auto sm:h-24"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </motion.div>
        
        {/* Menu Button - Top Right */}
        <motion.button 
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:text-[#FEDD00] p-2 transition-colors duration-300"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          whileTap={{ scale: 0.95 }}
        >
          <svg 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            ref={menuRef}
            className="md:hidden fixed left-0 right-0 z-50 rounded-xl py-4 px-4 mx-4 backdrop-blur-lg bg-white/15 border border-white/20 shadow-xl ring-1 ring-white/10"
            style={{ top: '120px' }}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <motion.a 
              href="#contact" 
              className="font-open-sans block py-2 px-3 text-sm font-semibold uppercase transition-colors duration-300 rounded-full text-white hover:bg-white/20"
              onClick={(e) => {
                handleSmoothScroll(e, '#contact', 90)
                setIsMenuOpen(false)
              }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Contact
            </motion.a>
            <motion.a 
              href="#about" 
              className="font-open-sans block py-2 px-3 text-sm font-semibold uppercase transition-colors duration-300 rounded-full text-white hover:bg-white/20"
              onClick={(e) => {
                handleSmoothScroll(e, '#about', 90)
                setIsMenuOpen(false)
              }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              About Us
            </motion.a>
            <motion.a 
              href="#gallery" 
              className="font-open-sans block py-2 px-3 text-sm font-semibold uppercase transition-colors duration-300 rounded-full text-white hover:bg-white/20"
              onClick={(e) => {
                handleSmoothScroll(e, '#gallery', 90)
                setIsMenuOpen(false)
              }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Gallery
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop/Tablet Header - Centered in middle of screen */}
      <header className="absolute left-0 w-full z-50 bg-transparent" style={{ top: '18%', transform: 'translateY(-50%)' }}>
        <nav className="w-full">
          <motion.div 
            className="hidden md:flex items-center justify-center h-24 lg:h-32 w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
          {/* Contact - Left side */}
          <motion.div 
            className="mr-8 md:mr-12 lg:mr-16"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.a 
              href="#contact" 
              className="font-akira text-white hover:text-[#FEDD00] text-sm lg:text-base font-normal transition-colors duration-300"
              onClick={(e) => handleSmoothScroll(e, '#contact', 90)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </motion.div>
          
          {/* Logo - Center with white color */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <img 
              src={logo} 
              alt="Padel FC Logo" 
              className="h-24 w-auto lg:h-32 xl:h-36"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </motion.div>
          
          {/* About Us - Right side */}
          <motion.div 
            className="ml-8 md:ml-12 lg:ml-16"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.a 
              href="#about" 
              className="font-akira text-white hover:text-[#FEDD00] text-sm lg:text-base font-normal transition-colors duration-300"
              onClick={(e) => handleSmoothScroll(e, '#about', 90)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About Us
            </motion.a>
          </motion.div>
          </motion.div>
        </nav>
      </header>
    </>
  )
}
