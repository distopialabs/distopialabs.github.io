import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GithubIcon, GlobeIcon, LinkedinIcon, MapPinIcon, MailIcon } from 'lucide-react';

const socialLinks = [
  {
    label: 'Github',
    href: 'https://github.com/distopialabs',
    icon: GithubIcon
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/suyash-gupta-253b39a1/',
    icon: LinkedinIcon
  },
  {
    label: 'University Page',
    href: 'https://cs.uoregon.edu/',
    icon: GlobeIcon
  }
];

export function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Distopia Lab Collaborations and Inquiries</title>
        <link rel="canonical" href="https://distopialabs.github.io/contact" />
        <meta
          name="description"
          content="Reach the Distopia Lab for collaborations, student opportunities, and research partnerships in distributed systems."
        />
        <meta property="og:title" content="Contact Distopia Lab" />
        <meta
          property="og:description"
          content="Contact the Distopia Lab at the University of Oregon for distributed systems research collaborations."
        />
        <meta property="og:url" content="https://distopialabs.github.io/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://distopialabs.github.io/distopialogo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Distopia Lab" />
        <meta
          name="twitter:description"
          content="Collaborate with the Distopia Lab on distributed systems and blockchain research."
        />
        <meta name="twitter:image" content="https://distopialabs.github.io/distopialogo.png" />
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2 text-primary">Contact Us</h1>
        <p className="text-xl text-gray-600 mb-12">
          Get in touch with the Distopia Lab for collaborations, inquiries, or
          opportunities.
        </p>
        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
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
                    <a href="mailto:suyash@uoregon.edu" className="text-primary hover:underline">
                      suyash@uoregon.edu
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* Social Links */}
            <div className="mt-8">
              <h3 className="font-semibold mb-3">Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="bg-primary text-white p-2 rounded-full hover:bg-primary/80 transition-colors"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Map */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Find Us</h2>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.6379880636867!2d-123.07508372392863!3d44.04473797107243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c11e3a3a5e8571%3A0x1d43a2f9fef49a5c!2sUniversity%20of%20Oregon!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
