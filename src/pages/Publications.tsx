import React, { useState } from 'react';
import { ArrowUpRightIcon, DownloadIcon, BookOpenIcon } from 'lucide-react';
export function Publications() {
  const [filter, setFilter] = useState('all');
  const publications = [{
    title: 'Algorithmic Bias in Hiring Systems: Detection and Mitigation',
    authors: 'Zhang, K., Chen, S., & Sanchez, M.',
    venue: 'IEEE Conference on AI Ethics',
    year: 2021,
    type: 'conference',
    link: '#',
    pdf: '#',
    abstract: 'This paper identifies sources of bias in AI-powered hiring systems and proposes technical and procedural approaches to mitigate them.'
  }];
  const filteredPublications = filter === 'all' ? publications : publications.filter(pub => pub.type === filter);
  return <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-primary">Publications</h1>
      <p className="text-xl text-gray-600 mb-12">
        Our research contributions to the academic community and beyond.
      </p>
      {/* Publication Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button className={`px-4 py-2 rounded-md ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'}`} onClick={() => setFilter('all')}>
          All Publications
        </button>
        <button className={`px-4 py-2 rounded-md ${filter === 'journal' ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'}`} onClick={() => setFilter('journal')}>
          Journal Articles
        </button>
        <button className={`px-4 py-2 rounded-md ${filter === 'conference' ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'}`} onClick={() => setFilter('conference')}>
          Conference Papers
        </button>
      </div>
      {/* Publications List */}
      <div className="space-y-6">
        {filteredPublications.map((pub, index) => <div key={index} className="bg-white rounded-lg shadow-md p-6">
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
              <button className="text-gray-700 hover:text-primary text-sm mr-6" onClick={() => document.getElementById(`abstract-${index}`)?.classList.toggle('hidden')}>
                <BookOpenIcon className="inline mr-1" size={16} /> Show Abstract
              </button>
              <a href={pub.pdf} className="text-gray-700 hover:text-primary text-sm mr-6">
                <DownloadIcon className="inline mr-1" size={16} /> PDF
              </a>
              <a href={pub.link} className="text-gray-700 hover:text-primary text-sm">
                <ArrowUpRightIcon className="inline mr-1" size={16} /> Publisher
                Link
              </a>
            </div>
            <div id={`abstract-${index}`} className="text-gray-700 text-sm bg-gray-50 p-4 rounded-md hidden">
              <strong>Abstract:</strong> {pub.abstract}
            </div>
          </div>)}
      </div>
    </div>;
}