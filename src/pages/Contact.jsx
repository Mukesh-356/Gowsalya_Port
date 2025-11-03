import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ContactForm from '../components/Contact/ContactForm'

const Contact = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(pageRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
  }, [])

  return (
    <div ref={pageRef} className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold text-center mb-4">Get In Touch</h1>
        <p className="text-xl text-gray-300 text-center mb-12">
          Let's create something amazing together
        </p>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact