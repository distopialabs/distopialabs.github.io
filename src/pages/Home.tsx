import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { newsItems } from '../data/newsItems';
export function Home() {
  return <>
      <Helmet>
        <title>Distopia Lab | Distributed Systems Research at the University of Oregon</title>
        <link rel="canonical" href="https://distopialabs.github.io/" />
        <meta name="description" content="Distopia Lab advances distributed systems research in federated learning, blockchain consensus, and decentralized infrastructure at the University of Oregon." />
        <meta property="og:title" content="Distopia Lab | Distributed Systems Research" />
        <meta property="og:description" content="Explore the Distopia Lab's work in federated learning, blockchain consensus, and decentralized systems." />
        <meta property="og:url" content="https://distopialabs.github.io/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://distopialabs.github.io/distopialogo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Distopia Lab | Distributed Systems Research" />
        <meta name="twitter:description" content="Researching federated learning, blockchain, and decentralized infrastructure at the University of Oregon." />
        <meta name="twitter:image" content="https://distopialabs.github.io/distopialogo.png" />
      </Helmet>
      <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Advancing Distributed Systems at the Distopia Lab
              </h1>
              <p className="text-lg mb-6">
                Pioneering research in federated learning, blockchain consensus mechanisms, 
                and decentralized systems to build the next generation of distributed technologies.
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
            title: 'Federated Learning',
            description: 'Advancing machine learning techniques that enable training across decentralized data sources while preserving privacy and improving efficiency.'
          }, {
            title: 'Blockchain Infrastructure',
            description: 'Developing innovative consensus mechanisms, cross-chain communication protocols, and scalable blockchain infrastructure solutions.'
          }, {
            title: 'Decentralized Systems',
            description: 'Creating efficient distributed architectures, storage solutions, and communication protocols for next-generation decentralized applications.'
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
            <div>
              <h2 className="text-3xl font-bold">Recent Updates</h2>
              <p className="text-gray-600 mt-2">Stay up to date with our latest achievements and research developments</p>
            </div>
            <Link to="/news" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
              View all news <ArrowRightIcon size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.slice(0, 3).map((news) => (
              <Link key={news.slug} to={`/news#${news.slug}`} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 block">
                <span className="text-xs uppercase tracking-wide text-primary/80 font-semibold">{news.category}</span>
                <p className="text-sm text-gray-500 mb-1">{news.date}</p>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {news.title}
                </h3>
                <p className="text-gray-700 mb-4">{news.excerpt}</p>
                <span className="text-primary text-sm font-medium">Read more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Join Us CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Distopia Lab</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're looking for passionate researchers, students, and
            collaborators to advance cutting-edge research in distributed systems,
            federated learning, and blockchain technologies.
          </p>
          <Link to="/contact" className="bg-secondary text-primary font-medium px-8 py-3 rounded-md hover:bg-secondary/90 transition-colors inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
    </>;
}
