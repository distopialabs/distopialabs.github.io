import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRightIcon, DownloadIcon, BookOpenIcon } from 'lucide-react';
export function Publications() {
  const [filter, setFilter] = useState<'all' | 'journal' | 'conference'>('all');
  const [openAbstracts, setOpenAbstracts] = useState<Record<string, boolean>>({});
  const publications = [{
    title: 'HotStuff-1: Linear Consensus with One-Phase Speculation',
    authors: 'Gupta, S., Balivada, N., Subedi, S., et al.',
    venue: 'ACM SIGMOD (to appear)',
    year: 2025,
    type: 'journal' as const,
    link: '/news',
    pdf: '/news',
    abstract: 'HotStuff-1 reduces consensus latency for geo-distributed databases by collapsing multi-phase agreement into a single speculative round while preserving safety guarantees.'
  }, {
    title: 'Picsou: Enabling Efficient Cross-Consensus Communication',
    authors: 'Distopia Lab Research Team',
    venue: 'OSDI 2025',
    year: 2025,
    type: 'conference' as const,
    link: '/news',
    pdf: '/news',
    abstract: 'Picsou introduces protocol bridges that batch and verify messages between heterogeneous proof-of-stake networks, improving throughput without sacrificing liveness.'
  }, {
    title: 'Samurai: Slash Your Decentralized Storage',
    authors: 'Subedi, S., Nepal, A., & Gupta, S.',
    venue: 'OSDI 2025 Poster',
    year: 2025,
    type: 'conference' as const,
    link: '/news',
    pdf: '/news',
    abstract: 'Samurai proposes adaptive erasure coding and placement strategies that lower decentralized storage costs while maintaining Byzantine fault tolerance.'
  }];
  const filteredPublications = filter === 'all' ? publications : publications.filter(pub => pub.type === filter);
  const toggleAbstract = (id: string) => {
    setOpenAbstracts((current) => ({
      ...current,
      [id]: !current[id]
    }));
  };
  return <>
      <Helmet>
        <title>Publications | Distopia Lab Research Output</title>
        <link rel="canonical" href="https://distopialabs.github.io/publications" />
        <meta name="description" content="Browse Distopia Lab publications on consensus protocols, cross-chain communication, and decentralized storage." />
        <meta property="og:title" content="Distopia Lab Publications" />
        <meta property="og:description" content="Conference papers and posters covering speculative consensus, blockchain interoperability, and decentralized storage." />
        <meta property="og:url" content="https://distopialabs.github.io/publications" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://distopialabs.github.io/distopialogo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Distopia Lab Publications" />
        <meta name="twitter:description" content="Recent distributed systems research outputs from the Distopia Lab." />
        <meta name="twitter:image" content="https://distopialabs.github.io/distopialogo.png" />
      </Helmet>
      <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-primary">Publications</h1>
      <p className="text-xl text-gray-600 mb-12">
        Our conference papers, posters, and artifacts in distributed systems and
        databases.
      </p>
      {/* Publication Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button className={`px-4 py-2 rounded-md ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'}`} type="button" onClick={() => setFilter('all')}>
          All Publications
        </button>
        <button className={`px-4 py-2 rounded-md ${filter === 'journal' ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'}`} type="button" onClick={() => setFilter('journal')}>
          Journal Articles
        </button>
        <button className={`px-4 py-2 rounded-md ${filter === 'conference' ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'}`} type="button" onClick={() => setFilter('conference')}>
          Conference Papers
        </button>
      </div>
      {/* Publications List */}
      <div className="space-y-6">
        {filteredPublications.map((pub) => {
          const abstractId = pub.title;
          return <div key={pub.title} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold text-primary mb-2">
                {pub.title}
              </h2>
              <span className={`px-3 py-1 rounded-full text-sm font-medium h-fit ${pub.type === 'journal' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                {pub.type === 'journal' ? 'Journal' : 'Conference'}
              </span>
            </div>
            <p className="text-gray-700 mb-1">{pub.authors}</p>
            <p className="text-gray-600 italic mb-3">
              {pub.venue}, {pub.year}
            </p>
            <div className="mb-4">
              <button className="text-gray-700 hover:text-primary text-sm mr-6" type="button" onClick={() => toggleAbstract(abstractId)} aria-expanded={!!openAbstracts[abstractId]}>
                <BookOpenIcon className="inline mr-1" size={16} />
                {openAbstracts[abstractId] ? 'Hide Abstract' : 'Show Abstract'}
              </button>
              <a href={pub.pdf} className="text-gray-700 hover:text-primary text-sm mr-6">
                <DownloadIcon className="inline mr-1" size={16} /> PDF
              </a>
              <a href={pub.link} className="text-gray-700 hover:text-primary text-sm">
                <ArrowUpRightIcon className="inline mr-1" size={16} /> Publisher
                Link
              </a>
            </div>
            <div className={`text-gray-700 text-sm bg-gray-50 p-4 rounded-md ${openAbstracts[abstractId] ? '' : 'hidden'}`}>
              <strong>Abstract:</strong> {pub.abstract}
            </div>
          </div>;
        })}
      </div>
    </div>
    </>;
}
