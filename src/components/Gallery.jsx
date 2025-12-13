import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1603297631957-3c9e1d95330b?auto=format&fit=crop&w=1400&q=80',
    alt: 'Indoor padel court with glass walls',
    caption: 'Premium indoor glass courts with pro lighting',
    tag: 'Indoor',
    location: 'Berlin | Spree Riverside'
  },
  {
    src: 'https://images.unsplash.com/photo-1516642499105-492ff3ac521e?auto=format&fit=crop&w=1400&q=80',
    alt: 'Players rallying on outdoor padel court',
    caption: 'Riverside outdoor play with skyline views',
    tag: 'Outdoor',
    location: 'Berlin | Waterfront'
  },
  {
    src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1400&q=80',
    alt: 'Night session padel under lights',
    caption: 'Night sessions with music and community events',
    tag: 'Night Session',
    location: 'Berlin | Industrial Loft'
  },
  {
    src: 'https://images.unsplash.com/photo-1546512565-39d4dc4d77e0?auto=format&fit=crop&w=1400&q=80',
    alt: 'Close-up of padel net and court texture',
    caption: 'Tournament-ready surfaces and curated gear',
    tag: 'Tournament',
    location: 'Berlin | Pro Courts'
  }
]

export default function Gallery() {
  const [current, setCurrent] = useState(0)

  return (
    <section id="gallery" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="font-open-sans uppercase text-xs tracking-[0.25em] text-white/60 mb-3">
            Courts & Atmosphere
          </p>
          <h2 className="font-akira text-3xl md:text-4xl font-bold text-white mb-3">
            Experience Our Padel Spaces
          </h2>
          <p className="font-open-sans text-lg text-white/80 max-w-2xl mx-auto">
            Indoor glass courts, riverside views, and night sessions designed for play, community, and events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Feature media */}
          <motion.div
            className="relative col-span-2 overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-white/5 backdrop-blur-md"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={images[current].src}
                src={images[current].src}
                alt={images[current].alt}
                className="w-full h-[340px] sm:h-[440px] lg:h-[560px] object-cover"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex flex-col gap-3 bg-white/15 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/85">
                  <span className="px-2 py-1 rounded-md bg-white/20 text-white">{images[current].tag}</span>
                  <span className="text-white/70">{images[current].location}</span>
                </div>
                <p className="text-lg font-semibold text-white leading-snug">
                  {images[current].caption}
                </p>
                <div className="flex gap-2 items-center text-white/80 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#FEDD00] inline-block" />
                  <span>Premium conditions for play, training, and events.</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Thumbnails */}
          <motion.div
            className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible no-scrollbar"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }}
          >
            {images.map((item, idx) => {
              const isActive = idx === current
              return (
                <button
                  key={item.src}
                  onClick={() => setCurrent(idx)}
                  className={`relative flex-shrink-0 w-[180px] sm:w-[220px] lg:w-full lg:h-[120px] overflow-hidden rounded-xl border ${isActive ? 'border-[#FEDD00]/80' : 'border-white/10'} bg-white/5 backdrop-blur-sm shadow-lg transition-transform duration-200`}
                  style={{ height: '120px' }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold">{item.tag}</span>
                    <span className="text-white/70">{idx + 1}/{images.length}</span>
                  </div>
                </button>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
