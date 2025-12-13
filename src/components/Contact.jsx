import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    notes: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    // Let Netlify handle the form submission
    // The form will be submitted naturally without preventDefault
    // Netlify will redirect to a thank you page or back to the form
  }

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-akira text-3xl md:text-4xl font-bold mb-4" style={{ color: '#012169' }}>
            Want to Collaborate?
          </h2>
          <p className="font-open-sans text-xl text-gray-700 max-w-xl mx-auto">
            Partner with Berlin's premier padel destination. Let's create something amazing together.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            {/* Hidden input for Netlify bot detection */}
            <input type="hidden" name="form-name" value="contact" />
            <div style={{ display: 'none' }}>
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </div>
            <div>
              <label htmlFor="business-name" className="block text-sm font-medium mb-2" style={{ color: '#012169' }}>
                Business Name
              </label>
              <input
                type="text"
                id="business-name"
                name="business-name"
                defaultValue={formData.businessName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 bg-white text-black"
                style={{ borderColor: '#d1d5db', focusRingColor: '#012169' }}
              />
            </div>

            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium mb-2" style={{ color: '#012169' }}>
                Contact Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="contact-name"
                defaultValue={formData.contactName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 bg-white text-black"
                style={{ borderColor: '#d1d5db', focusRingColor: '#012169' }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#012169' }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 bg-white text-black"
                  style={{ borderColor: '#d1d5db', focusRingColor: '#012169' }}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: '#012169' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  defaultValue={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 bg-white text-black"
                  style={{ borderColor: '#d1d5db', focusRingColor: '#012169' }}
                />
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium mb-2" style={{ color: '#012169' }}>
                Additional Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                defaultValue={formData.notes}
                onChange={handleChange}
                placeholder="Tell us about your collaboration ideas, partnership proposals, or any other details..."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 bg-white text-black"
                style={{ borderColor: '#d1d5db', focusRingColor: '#012169' }}
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="font-open-sans w-full px-6 py-4 rounded-full text-base font-semibold backdrop-blur-lg bg-[#FEDD00]/80 text-black border border-white/30 ring-1 ring-white/20 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.25)]"
              whileHover={{ 
                scale: 1.02,
                y: -1,
                backgroundColor: 'rgba(1, 33, 105, 0.88)',
                color: '#FFFFFF',
                transition: { duration: 0.18 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              Contact
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
