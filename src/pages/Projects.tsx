import React from 'react';
export function Projects() {
  const projects = [{
    title: 'Ethical AI Framework',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&auto=format&fit=crop',
    description: 'Developing a comprehensive framework for evaluating and ensuring ethical AI systems across various domains. This project combines technical solutions with policy recommendations.',
  }, {
    title: 'Digital Privacy Toolkit',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=400&auto=format&fit=crop',
    description: 'Creating open-source tools and educational resources to help individuals and organizations better protect their digital privacy in an increasingly connected world.',
  }, {
    title: 'Bridging the Digital Divide',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop',
    description: 'Researching and implementing community-based solutions to address technological inequality and improve digital access in underserved communities.',
  }];
  return <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-primary">Our Projects</h1>
      <p className="text-xl text-gray-600 mb-12">
        Exploring the complex interplay between technology, society, and ethics
        through innovative research initiatives.
      </p>
      {/* Projects List */}
      <div className="space-y-12">
        {projects.map((project, index) => <div key={index} className={`bg-white rounded-lg shadow-md overflow-hidden ${index % 2 === 0 ? 'md:flex' : 'md:flex md:flex-row-reverse'}`}>
            <div className="md:w-1/3">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 md:w-2/3">
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-2xl font-bold text-primary">
                  {project.title}
                </h2>
              </div>
              <p className="text-gray-700 mb-4">{project.description}</p>
            </div>
          </div>)}
      </div>
      {/* Collaboration CTA */}
      <div className="mt-16 bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Interested in Collaboration?
        </h2>
        <p className="text-gray-700 mb-6">
          We're always open to new partnerships with academic institutions,
          industry partners, community organizations, and government agencies.
        </p>
        <a href="/contact" className="bg-primary text-white font-medium px-6 py-2 rounded-md hover:bg-primary/90 transition-colors inline-block">
          Contact Us
        </a>
      </div>
    </div>;
}