import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { handleSmoothScroll } from '../utils/smoothScroll'
import desktopVideoSrc from '../assets/padelhaus-2-desktop.mp4'
import mobileVideoSrc from '../assets/padelhaus-2-mobile.mp4'

export default function Hero() {
  const [videoError, setVideoError] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      {!prefersReducedMotion && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            objectPosition: 'center 40%' // Show more of the middle/bottom part of video
          }}
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1622278647429-71f511b0aaf0?auto=format&fit=crop&w=1920&q=80"
          onCanPlay={() => setVideoError(false)}
          onError={(e) => {
            console.log('Video error:', e)
            setVideoError(true)
          }}
        >
          <source src={mobileVideoSrc} type="video/mp4" media="(max-width: 768px)" />
          <source src={desktopVideoSrc} type="video/mp4" />
        </video>
      )}
      
      {/* Fallback background image */}
      {(videoError || prefersReducedMotion) && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1622278647429-71f511b0aaf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
      )}
      
      {/* Gradient overlay for better text readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.4) 100%)'
        }}
      ></div>
      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto md:mt-28 lg:mt-32"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.h1 
          className="font-akira text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-white mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          Berlin, Let's Padel
        </motion.h1>
        
        <motion.p 
          className="font-open-sans text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-12 max-w-2xl mx-auto opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          EXPERIENCE BERLIN'S FIRST INDOOR PADEL CLUB! ENJOY PADEL ON AND OFF THE PITCH IN OUR NEW INDUSTRIAL LOACTION BY THE SPREE
        </motion.p>
        
        <motion.button
          className="inline-flex items-center gap-3 font-bold text-lg text-black bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-xl shadow-lg"
          style={{ padding: '1rem 2.5rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
          whileHover={{
            scale: 1.05,
            y: -3,
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
            transition: { type: 'spring', stiffness: 300 }
          }}
          whileTap={{
            scale: 0.95,
            transition: { type: 'spring', stiffness: 400 }
          }}
          onClick={(e) => handleSmoothScroll(e, '#contact', 90)}
        >
          <span>Book Now</span>
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 5, transition: { type: 'spring', stiffness: 300 } }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  )
}
