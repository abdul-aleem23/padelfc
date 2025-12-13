import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const events = [
  {
    title: '7AM CLUB',
    meta: 'Community Event | Hamburg',
    image: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=1600&q=80',
    badge: 'Morning Grind'
  },
  {
    title: 'PADEL & MUSIC',
    meta: 'Night Session | Berlin',
    image: 'https://images.unsplash.com/photo-1505961232864-21c5f45b4f4a?auto=format&fit=crop&w=1600&q=80',
    badge: 'Live DJ Set'
  },
  {
    title: 'RIVER CUP',
    meta: 'Tournament | Spree',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80',
    badge: 'Finals Weekend'
  },
  {
    title: 'CITY LIGHTS',
    meta: 'After Work | Berlin',
    image: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1600&q=80',
    badge: 'Twilight Play'
  }
]

export default function EventShowcase() {
  const trackRef = useRef(null)
  const [isAtEnd, setIsAtEnd] = useState(false)
  const [isAtStart, setIsAtStart] = useState(true)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const tolerance = 24 // helps avoid tiny offsets from padding/scroll snap

    const handleScroll = () => {
      setIsAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - tolerance)
      setIsAtStart(el.scrollLeft <= tolerance)
    }

    handleScroll()
    el.addEventListener('scroll', handleScroll)
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollNext = () => {
    const el = trackRef.current
    if (!el) return
    const shift = el.clientWidth * 0.8
    el.scrollBy({ left: shift, behavior: 'smooth' })
  }

  const scrollPrev = () => {
    const el = trackRef.current
    if (!el) return
    const shift = el.clientWidth * 0.8
    el.scrollBy({ left: -shift, behavior: 'smooth' })
  }

  return (
    <section className="w-full bg-black text-white overflow-hidden">
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory no-scrollbar px-4 sm:px-0"
          style={{ scrollBehavior: 'smooth' }}
        >
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              className="relative snap-start flex-shrink-0 w-[74vw] sm:w-[56vw] lg:w-[30vw] xl:w-[26vw] max-h-[88vh] first:ml-0 last:mr-0 sm:ml-0 sm:mr-0"
              style={{ aspectRatio: '9 / 16' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.45) 20%, rgba(0,0,0,0.65) 65%), url('${event.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />

              <div className="absolute inset-0 flex flex-col p-6 sm:p-8">
                <div className="mt-auto space-y-3">
                  <div className="inline-flex bg-white/90 text-black px-4 py-2 text-[11px] tracking-[0.14em] uppercase font-semibold">
                    {event.badge}
                  </div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.18em] opacity-80">
                    {event.meta}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    {event.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!isAtStart && (
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/8 via-black/3 to-transparent md:from-black/15 md:via-black/8 md:to-transparent">
            <button
              type="button"
              onClick={scrollPrev}
              className="pointer-events-auto absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-3 shadow-lg hover:scale-105 transition-transform bg-white/15 text-white backdrop-blur-lg"
              aria-label="Scroll to previous events"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}

        {!isAtEnd && (
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/8 via-black/3 to-transparent md:from-black/15 md:via-black/8 md:to-transparent">
            <button
              type="button"
              onClick={scrollNext}
              className="pointer-events-auto absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-3 shadow-lg hover:scale-105 transition-transform bg-white/15 text-white backdrop-blur-lg"
              aria-label="Scroll to next events"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
