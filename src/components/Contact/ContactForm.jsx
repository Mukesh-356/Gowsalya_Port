import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { gsap } from 'gsap'

const ContactForm = () => {
  const formRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    gsap.fromTo(formRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
    )
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.sendForm(
        'service_rd4r2l6', // Your Service ID
        'template_24adqmq', // Your Template ID
        formRef.current,
        'HufKFXydAPZ-x8z0c' // Your Public Key
      )
      
      setMessage('Message sent successfully!')
      formRef.current.reset()
    } catch (error) {
      setMessage('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setMessage(''), 5000)
    }
  }

  return (
    <div className="bg-secondary/50 rounded-2xl p-8 backdrop-blur-sm">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full px-4 py-3 bg-primary border border-gray-600 rounded-lg focus:outline-none focus:border-accent transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="from_email"
              required
              className="w-full px-4 py-3 bg-primary border border-gray-600 rounded-lg focus:outline-none focus:border-accent transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            required
            className="w-full px-4 py-3 bg-primary border border-gray-600 rounded-lg focus:outline-none focus:border-accent transition-colors"
            placeholder="Subject"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            name="message"
            required
            rows="6"
            className="w-full px-4 py-3 bg-primary border border-gray-600 rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent text-white py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {message && (
          <div className={`p-4 rounded-lg text-center ${
            message.includes('successfully') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
          }`}>
            {message}
          </div>
        )}
      </form>
    </div>
  )
}

export default ContactForm