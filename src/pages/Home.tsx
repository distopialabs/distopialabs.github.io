import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
export function Home() {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Exploring Digital Futures at the Distopia Lab
              </h1>
              <p className="text-lg mb-6">
                Researching the complex interplay between technology, society,
                and ethics to build a more equitable digital future.
              </p>
              <div className="flex gap-4">
                <Link to="/projects" className="bg-secondary text-primary font-medium px-6 py-2 rounded-md hover:bg-secondary/90 transition-colors">
                  Our Projects
                </Link>
                <Link to="/contact" className="bg-white text-primary font-medium px-6 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  Get Involved
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="/distopialogo.png" alt="Distopia Lab Logo" className="w-3/4 max-w-md" />
            </div>
          </div>
        </div>
      </section>
      {/* Research Focus Areas */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Research Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            title: 'AI Ethics & Governance',
            description: 'Exploring the ethical implications of artificial intelligence and developing frameworks for responsible AI development.'
          }, {
            title: 'Digital Privacy & Security',
            description: 'Researching methods to protect privacy and enhance security in an increasingly connected world.'
          }, {
            title: 'Technological Inequality',
            description: 'Addressing disparities in access to technology and its benefits across different communities and demographics.'
          }].map((area, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-700 mb-4">{area.description}</p>
                <Link to="/projects" className="inline-flex items-center text-primary hover:text-primary/80">
                  Learn more <ArrowRightIcon size={16} className="ml-1" />
                </Link>
              </div>)}
          </div>
        </div>
      </section>
      {/* Latest News */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest News</h2>
            <Link to="/news" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
              View all news <ArrowRightIcon size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            title: 'Distopia Lab Receives $2M NSF Grant for AI Ethics Research',
            date: 'June 15, 2023',
            excerpt: 'The National Science Foundation has awarded the Distopia Lab a $2 million grant to study ethical considerations in machine learning algorithms.'
          }, {
            title: 'New Partnership with Tech Industry Leaders Announced',
            date: 'May 3, 2023',
            excerpt: 'Distopia Lab partners with leading tech companies to develop guidelines for responsible technology development.'
          }, {
            title: 'Distopia Lab Researchers Present at ICML Conference',
            date: 'April 22, 2023',
            excerpt: "Lab members presented groundbreaking research on bias mitigation in machine learning at this year's International Conference on Machine Learning."
          }].map((news, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {news.title}
                </h3>
                <p className="text-gray-700 mb-4">{news.excerpt}</p>
                <Link to="/news" className="inline-flex items-center text-primary hover:text-primary/80">
                  Read more <ArrowRightIcon size={16} className="ml-1" />
                </Link>
              </div>)}
          </div>
        </div>
      </section>
      {/* Join Us CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Distopia Lab</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're looking for passionate researchers, students, and
            collaborators to join our mission of creating more equitable digital
            futures.
          </p>
          <Link to="/contact" className="bg-secondary text-primary font-medium px-8 py-3 rounded-md hover:bg-secondary/90 transition-colors inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>;
}