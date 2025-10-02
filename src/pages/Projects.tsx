import React from 'react';
export function Projects() {
  const projects = [{
    title: 'Ethical AI Framework',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&auto=format&fit=crop',
    status: 'Active',
    description: 'Developing a comprehensive framework for evaluating and ensuring ethical AI systems across various domains. This project combines technical solutions with policy recommendations.',
    team: ['Dr. Sarah Chen', 'Dr. James Wilson', 'Kai Zhang', 'Olivia Washington'],
    funding: 'National Science Foundation'
  }, {
    title: 'Digital Privacy Toolkit',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=400&auto=format&fit=crop',
    status: 'Active',
    description: 'Creating open-source tools and educational resources to help individuals and organizations better protect their digital privacy in an increasingly connected world.',
    team: ['Dr. Marcus Johnson', 'Elena Rodriguez', 'Zoe Kim'],
    funding: 'Electronic Privacy Information Center'
  }, {
    title: 'Bridging the Digital Divide',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop',
    status: 'Active',
    description: 'Researching and implementing community-based solutions to address technological inequality and improve digital access in underserved communities.',
    team: ['Dr. Aisha Patel', 'Mateo Sanchez'],
    funding: 'Ford Foundation'
  }, {
    title: 'Algorithmic Transparency Initiative',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop',
    status: 'Completed',
    description: 'Developed methods and tools to make complex algorithms more transparent and interpretable to non-technical stakeholders, with a focus on algorithms used in public services.',
    team: ['Dr. Sarah Chen', 'Dr. Marcus Johnson', 'Kai Zhang'],
    funding: 'Open Society Foundations'
  }, {
    title: 'Tech Policy Lab',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&auto=format&fit=crop',
    status: 'Planning',
    description: 'Establishing a collaborative space for technologists, policymakers, and community members to develop effective technology policies that protect public interests.',
    team: ['Dr. Aisha Patel', 'Zoe Kim'],
    funding: 'MacArthur Foundation'
  }];
  return <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-primary">Our Projects</h1>
      <p className="text-xl text-gray-600 mb-12">
        Exploring the complex interplay between technology, society, and ethics
        through innovative research initiatives.
      </p>
      {/* Project Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button className="bg-primary text-white px-4 py-2 rounded-md">
          All Projects
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md">
          Active
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md">
          Completed
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md">
          Planning
        </button>
      </div>
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
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'Active' ? 'bg-green-100 text-green-800' : project.status === 'Completed' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Research Team</h3>
                <div className="flex flex-wrap gap-2">
                  {project.team.map((member, i) => <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {member}
                    </span>)}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Funding</h3>
                <p className="text-gray-700">{project.funding}</p>
              </div>
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