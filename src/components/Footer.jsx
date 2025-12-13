import { motion } from 'framer-motion'
import logo from '../assets/logo-one.svg'

export default function Footer() {
  const clubs = [
    { name: 'Berlin | Spree Riverside' },
    { name: 'Berlin | Industrial Indoor' },
    { name: 'Hamburg | Hafenview', tag: 'soon' },
    { name: 'Dusseldorf | Bohler', tag: 'soon' },
    { name: 'Oberhausen | B4', tag: 'soon' },
  ]

  const companyLinks = [
    { label: 'About Us' },
    { label: 'Careers', tag: 'We’re hiring' },
    { label: 'Press' },
    { label: 'Gift Cards' },
  ]

  const legalLinks = [{ label: 'Imprint' }]

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full text-white bg-gradient-to-br from-[#0b1c3f] via-[#0a1633] to-black"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4">
          <img src={logo} alt="Padel FC Logo" className="w-32 invert brightness-0" />
          <p className="text-sm text-white/80 leading-relaxed">
            Padel FC Berlin — riverside and indoor padel experiences with premium courts, events, and community.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Clubs</h3>
          <ul className="space-y-2 text-sm text-white/85">
            {clubs.map((club) => (
              <li key={club.name} className="flex items-center gap-2">
                <span>{club.name}</span>
                {club.tag && (
                  <span className="text-[11px] uppercase bg-white text-black px-2 py-0.5 rounded-md leading-tight">
                    {club.tag}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-white/85">
            {companyLinks.map((item) => (
              <li key={item.label} className="flex items-center gap-2">
                <span>{item.label}</span>
                {item.tag && (
                  <span className="text-[11px] uppercase bg-white text-black px-2 py-0.5 rounded-md leading-tight">
                    {item.tag}
                  </span>
                )}
              </li>
            ))}
          </ul>

          <h3 className="font-semibold text-lg mt-8 mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-white/85">
            {legalLinks.map((item) => (
              <li key={item.label}>{item.label}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <p className="text-sm text-white/85 leading-relaxed">
            Padel FC <br />
            Spree Riverside Courts <br />
            Berlin, Germany
          </p>
          <p className="mt-4 text-sm text-white/90">
            community@padelfc.com
          </p>
          <div className="flex items-center gap-4 mt-4 text-lg text-white/85">
            <a href="#" aria-label="Instagram" className="hover:text-white">IG</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">IN</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row justify-between text-xs text-white/60 gap-3">
          <span>© 2024 Padel FC. All rights reserved.</span>
          <span>Built for players, partners, and community.</span>
        </div>
      </div>
    </motion.footer>
  )
}
