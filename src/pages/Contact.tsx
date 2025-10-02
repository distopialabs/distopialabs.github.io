import React, { lazy } from 'react';
import { MapPinIcon, MailIcon, PhoneIcon, ClockIcon } from 'lucide-react';
export function Contact() {
  return <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-primary">Contact Us</h1>
      <p className="text-xl text-gray-600 mb-12">
        Get in touch with the Distopia Lab for collaborations, inquiries, or
        opportunities.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPinIcon className="text-primary mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-700">
                    Distopia Lab
                    <br />
                    School of Computer and Data Sciences
                    <br />
                    1585 E 13th Ave
                    <br />
                    Eugene, OR 97403
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MailIcon className="text-primary mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-700">
                    General inquiries:{' '}
                    <a href="mailto:distopia@uoregon.edu" className="text-primary hover:underline">
                      distopia@uoregon.edu
                    </a>
                    <br />
                    Director:{' '}
                    <a href="mailto:director.distopia@uoregon.edu" className="text-primary hover:underline">
                      director.distopia@uoregon.edu
                    </a>
                    <br />
                    Media:{' '}
                    <a href="mailto:media.distopia@uoregon.edu" className="text-primary hover:underline">
                      media.distopia@uoregon.edu
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="text-primary mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-700">
                    Office:{' '}
                    <a href="tel:+15415551234" className="text-primary hover:underline">
                      (541) 555-1234
                    </a>
                    <br />
                    Fax: (541) 555-5678
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="text-primary mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Office Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            {/* Social Media Links */}
            <div className="mt-8">
              <h3 className="font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-primary text-white p-2 rounded-full hover:bg-primary/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a href="#" className="bg-primary text-white p-2 rounded-full hover:bg-primary/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
                <a href="#" className="bg-primary text-white p-2 rounded-full hover:bg-primary/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Send Us a Message
            </h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your email address" required />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Subject of your message" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea id="message" rows={6} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Write your message here..." required></textarea>
              </div>
              <div className="mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                  <span className="text-gray-700 text-sm">
                    I agree to the privacy policy and consent to being contacted
                    regarding my inquiry.
                  </span>
                </label>
              </div>
              <button type="submit" className="bg-primary text-white font-medium px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Map */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-primary mb-6">Find Us</h2>
        <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.6379880636867!2d-123.07508372392863!3d44.04473797107243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c11e3a3a5e8571%3A0x1d43a2f9fef49a5c!2sUniversity%20of%20Oregon!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" width="100%" height="100%" style={{
          border: 0
        }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      {/* FAQs */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[{
          question: 'How can I collaborate with the Distopia Lab?',
          answer: 'We welcome collaborations with academic institutions, industry partners, government agencies, and community organizations. Please contact us through the form above or email us directly at distopia@uoregon.edu with details about your proposed collaboration.'
        }, {
          question: 'Are there opportunities for students to get involved?',
          answer: "Yes! We regularly have opportunities for undergraduate and graduate students. Please check the 'People' page for current openings or contact us directly to inquire about research assistantships, internships, or volunteer positions."
        }, {
          question: 'Can I visit the lab in person?',
          answer: 'We welcome visitors during our regular office hours. For research discussions or tours, we recommend scheduling an appointment in advance by contacting our administrative coordinator.'
        }, {
          question: 'Does the lab offer speaking engagements or workshops?',
          answer: 'Our faculty and researchers are available for speaking engagements, workshops, and consulting on topics related to our research areas. Please contact us with specific details about your event or needs.'
        }].map((faq, index) => <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-primary mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>)}
        </div>
      </div>
    </div>;
}