import React, { useState } from 'react';
import { ArrowUpRightIcon, DownloadIcon, BookOpenIcon } from 'lucide-react';
export function Publications() {
  const [filter, setFilter] = useState('all');
  const publications = [{
    title: 'Ethical Considerations in Algorithmic Decision-Making Systems',
    authors: 'Chen, S., Johnson, M., & Zhang, K.',
    venue: 'ACM Conference on Fairness, Accountability, and Transparency (FAccT)',
    year: 2023,
    type: 'conference',
    link: '#',
    pdf: '#',
    abstract: 'This paper presents a framework for evaluating the ethical implications of algorithmic decision-making systems across various domains including healthcare, criminal justice, and finance.'
  }, {
    title: 'Privacy-Preserving Machine Learning: Challenges and Opportunities',
    authors: 'Johnson, M., Washington, O., & Rodriguez, E.',
    venue: 'Journal of Privacy and Security',
    year: 2023,
    type: 'journal',
    link: '#',
    pdf: '#',
    abstract: 'We survey recent advances in privacy-preserving machine learning techniques and identify key challenges and opportunities for future research in this rapidly evolving field.'
  }, {
    title: 'Bridging Digital Divides: A Community-Based Approach',
    authors: 'Patel, A., Sanchez, M., & Kim, Z.',
    venue: 'CHI Conference on Human Factors in Computing Systems',
    year: 2022,
    type: 'conference',
    link: '#',
    pdf: '#',
    abstract: 'This paper presents findings from a three-year study on community-based interventions to address technological inequality in rural and urban settings.'
  }, {
    title: 'Towards Transparent AI: Methods for Explaining Black-Box Models',
    authors: 'Chen, S., Wilson, J., & Zhang, K.',
    venue: 'International Conference on Machine Learning (ICML)',
    year: 2022,
    type: 'conference',
    link: '#',
    pdf: '#',
    abstract: 'We propose novel methods for explaining complex machine learning models to non-technical stakeholders while preserving model performance.'
  }, {
    title: 'The Social Impacts of Automated Decision Systems in Public Services',
    authors: 'Patel, A., Johnson, M., & Kim, Z.',
    venue: 'Public Policy & Technology Review',
    year: 2022,
    type: 'journal',
    link: '#',
    pdf: '#',
    abstract: 'This article examines how automated decision systems deployed in public services affect different communities and proposes policy recommendations.'
  }, {
    title: 'Digital Privacy Literacy: Assessment and Intervention',
    authors: 'Rodriguez, E., Johnson, M., & Washington, O.',
    venue: 'Internet Policy Review',
    year: 2021,
    type: 'journal',
    link: '#',
    pdf: '#',
    abstract: 'We develop and validate a comprehensive framework for assessing digital privacy literacy and design evidence-based interventions to improve it.'
  }, {
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
      {/* Citation Information */}
      <div className="mt-16 bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Citation Information
        </h2>
        <p className="text-gray-700 mb-6">
          If you use our research in your work, please cite the relevant
          publication using the citation format provided with each paper. For
          general references to the Distopia Lab, please use:
        </p>
        <div className="bg-white p-4 rounded-md border border-gray-200 font-mono text-sm">
          Distopia Lab. (2023). University of Oregon School of Computer and Data
          Sciences. https://distopialab.uoregon.edu
        </div>
      </div>
    </div>;
}