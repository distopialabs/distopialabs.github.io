import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
export function Projects() {
  const projects = [{
    title: 'Samurai: Slash Your Decentralized Storage',
    subtitle: 'Reducing replication overhead for decentralized object stores.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Samurai delivers an adaptive erasure-coding layer that cuts redundant storage while sustaining Byzantine fault tolerance for global-scale applications. We co-design protocol instrumentation and storage placement policies that shrink latency for read-heavy workloads.',
    highlights: ['Poster accepted at OSDI 2025 for peer feedback on decentralized storage trade-offs.', 'Integrates with open-source IPFS gateways for reproducible experiments.'],
    ctaLabel: 'Read the OSDI 2025 announcement',
    ctaHref: '/news'
  }, {
    title: 'Picsou: Efficient Cross-Consensus Communication',
    subtitle: 'High-throughput bridges for heterogeneous blockchains.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=400&auto=format&fit=crop',
    description: 'Picsou introduces speculative batching and checkpoint proofs to safely translate transactions between proof-of-stake networks. The project unlocks composable decentralized finance workflows without sacrificing liveness guarantees.',
    highlights: ['Full paper accepted at OSDI 2025 highlighting protocol-level benchmarks.', 'Provides a reusable testing harness for new interoperability proposals.'],
    ctaLabel: 'Explore interoperability research highlights',
    ctaHref: '/publications'
  }, {
    title: 'HotStuff-1: One-Phase Speculative Consensus',
    subtitle: 'Lower latency consensus for geo-distributed databases.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop',
    description: 'HotStuff-1 compresses multi-phase agreement into a streamlined pipeline by monitoring speculative commits. Our implementation increases throughput for federated learning parameter servers and cross-datacenter ledgers.',
    highlights: ['Presented at SIGMOD 2025 with open benchmarks for federated ML training.', 'Informs lab collaborations on hybrid cloud data management.'],
    ctaLabel: 'See related publications',
    ctaHref: '/publications'
  }];
  return <>
      <Helmet>
        <title>Research Projects | Distopia Lab Distributed Systems Initiatives</title>
        <link rel="canonical" href="https://distopialabs.github.io/projects" />
        <meta name="description" content="Explore Distopia Lab projects spanning decentralized storage, blockchain interoperability, and speculative consensus protocols." />
        <meta property="og:title" content="Distopia Lab Research Projects" />
        <meta property="og:description" content="Projects that advance decentralized storage, cross-consensus communication, and federated learning infrastructure." />
        <meta property="og:url" content="https://distopialabs.github.io/projects" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://distopialabs.github.io/distopialogo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Distopia Lab Research Projects" />
        <meta name="twitter:description" content="Distributed systems initiatives across decentralized storage, blockchain consensus, and federated learning." />
        <meta name="twitter:image" content="https://distopialabs.github.io/distopialogo.png" />
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2 text-primary">Our Projects</h1>
        <p className="text-xl text-gray-600 mb-12">
          Explore the multi-year projects that carry our research from theory to
          open-source prototypes and peer-reviewed results.
        </p>
        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => <div key={project.title} className={`bg-white rounded-lg shadow-md overflow-hidden ${index % 2 === 0 ? 'md:flex' : 'md:flex md:flex-row-reverse'}`}>
              <div className="md:w-1/3">
                <img src={project.image} alt={project.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-primary">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <Link to={project.ctaHref} className="text-primary font-medium hover:text-primary/80 transition-colors">
                  {project.ctaLabel}
                </Link>
              </div>
            </div>)}
        </div>
        {/* Collaboration CTA */}
        <div className="mt-16 bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Interested in Collaboration?
          </h2>
          <p className="text-gray-700 mb-6">
            We partner with academic groups, industry research labs, and public
            agencies to evaluate distributed systems in real deployments. Reach
            out if you would like to co-design experiments or host a seminar.
          </p>
          <Link to="/contact" className="bg-primary text-white font-medium px-6 py-2 rounded-md hover:bg-primary/90 transition-colors inline-block">
            Contact Us
          </Link>
        </div>
      </div>
    </>;
}
