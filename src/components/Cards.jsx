import { motion } from 'framer-motion';
import court from '../assets/icons/court.svg';
import indoor from '../assets/icons/indoor.svg';
import location from '../assets/icons/location.svg';

const features = [
  {
    id: "01",
    icon: court,
    title: "Riverside Court",
    desc: "Play with water-side views on the banks of the Spree. A one-of-a-kind setting where sport meets atmosphere."
  },
  {
    id: "02",
    icon: indoor,
    title: "Premium Indoor Courts",
    desc: "Year-round play in industrial-style indoor courts with pro lighting and ideal conditions."
  },
  {
    id: "03",
    icon: location,
    title: "Perfect Location",
    desc: "5 mins from Berlin Ostkreuz. Soon: floating saunas & riverside gastronomy."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: 'easeOut'
    }
  })
};

export default function Cards() {
  return (
    <section id="about" className="w-full py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
            Why Padel FC
          </p>
          <h2 className="mt-4 text-3xl font-akira font-bold text-slate-900 sm:text-4xl md:text-5xl">
            A Unique Padel Experience
          </h2>
          <p className="mt-6 text-base text-slate-600 md:text-lg">
            Every detail of our club is designed to elevate your match day—from our thoughtfully designed courts to our vibrant community atmosphere.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-full bg-slate-100">
                  <img src={feature.icon} alt={`${feature.title} icon`} className="h-8 w-8 text-slate-700" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
