import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import emailjs from 'emailjs-com'

const Contact = () => {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    )
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await emailjs.sendForm(
        'service_rd4r2l6', // Your Service ID
        'template_24adqmq', // Your Template ID
        formRef.current,
        'HufKFXydAPZ-x8z0c' // Your Public Key
      )
      
      console.log('Email sent successfully:', result)
      setMessage('Message sent successfully! 🎉 I will get back to you soon.')
      formRef.current.reset()
    } catch (error) {
      console.error('Email send failed:', error)
      setMessage('Failed to send message. Please try again or contact me directly at abigowsalya3@gmail.com')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setMessage(''), 5000)
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6 min-h-screen flex items-center bg-black">
      <div className="container mx-auto max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white"
              style={{
                background: 'linear-gradient(135deg, #00D8FF 0%, #7928CA 50%, #FF0080 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's create something amazing together
          </p>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl p-8"
             style={{
               background: 'rgba(255, 255, 255, 0.05)',
               backdropFilter: 'blur(20px)',
               border: '1px solid rgba(255, 255, 255, 0.1)'
             }}>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Your Name *</label>
                <input
                  type="text"
                  name="user_name"  // Changed from from_name to user_name
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none transition-colors text-white placeholder-gray-400"
                  placeholder="Enter your full name"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Your Email *</label>
                <input
                  type="email"
                  name="user_email"  // Changed from from_email to user_email
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none transition-colors text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Subject *</label>
              <input
                type="text"
                name="subject"
                required
                className="w-full px-4 py-3 rounded-lg focus:outline-none transition-colors text-white placeholder-gray-400"
                placeholder="What is this regarding?"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Your Message *</label>
              <textarea
                name="message"
                required
                rows="6"
                className="w-full px-4 py-3 rounded-lg focus:outline-none transition-colors resize-none text-white placeholder-gray-400"
                placeholder="Tell me about your project or inquiry..."
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-white hover:scale-105 transform"
              style={{
                background: 'linear-gradient(135deg, #00D8FF 0%, #7928CA 100%)'
              }}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                'Send Message'
              )}
            </button>

            {message && (
              <div className={`p-4 rounded-lg text-center ${
                message.includes('successfully') ? 'text-green-400' : 'text-red-400'
              }`}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                {message}
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12">
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-4 rounded-xl"
                 style={{
                   background: 'rgba(255, 255, 255, 0.05)',
                   backdropFilter: 'blur(10px)',
                   border: '1px solid rgba(255, 255, 255, 0.1)'
                 }}>
              <div className="text-2xl mb-2">📧</div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="text-cyan-300 font-semibold">abigowsalya3@gmail.com</p>
            </div>
            <div className="text-center p-4 rounded-xl"
                 style={{
                   background: 'rgba(255, 255, 255, 0.05)',
                   backdropFilter: 'blur(10px)',
                   border: '1px solid rgba(255, 255, 255, 0.1)'
                 }}>
              <div className="text-2xl mb-2">📱</div>
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="text-purple-300 font-semibold">+91-6383255502</p>
            </div>
            <div className="text-center p-4 rounded-xl"
                 style={{
                   background: 'rgba(255, 255, 255, 0.05)',
                   backdropFilter: 'blur(10px)',
                   border: '1px solid rgba(255, 255, 255, 0.1)'
                 }}>
              <div className="text-2xl mb-2">📍</div>
              <p className="text-gray-400 text-sm">Location</p>
              <p className="text-pink-300 font-semibold">Salem,  Tamil Nadu, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact