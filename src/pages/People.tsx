import React from 'react';
export function People() {
  const principalInvestigator = {
    name: 'Dr. Suyash Gupta',
    role: 'Principal Investigator & Lab Director',
    image: 'public/suyash_dp.png',
    bio: 'Dr. Gupta is a Tenure-Track Assistant Professor at the Department of Computer Science, University of Oregon. He leads the Distopia Laboratory and co-leads the Oregon Networking Research Group. His research focuses on designing efficient distributed, decentralized and blockchain systems/databases/networks, and federated learning systems.'
  };
  const phDStudents = [{
    name: 'Nihal Balivada',
    research: 'Federated Learning',
    year: 'September 2024 - Present',
    image: 'public/nihal.jpeg'
  }, {
    name: 'Shistata Subedi',
    research: 'Blockchain Infrastructure',
    year: 'January 2025 - Present',
    image: 'public/shistata.jpeg'
  }, {
    name: 'Neil Sharma',
    research: 'Federated Learning & Transformers',
    year: 'September 2025 - Present',
    image: 'public/neil.jpeg'
  }];
  const mastersStudents = [{
    name: 'Asim Nepal',
    research: 'insert here',
    year: 'January 2025 - Present',
    image: 'public/asim.jpeg'
  }, {
    name: 'Ranjitha Rani',
    research: 'insert here',
    year: 'June 2025 - Present',
    image: 'public/ranjitha.jpeg'
  }];
  const undergraduates = [{
    name: 'Armaan Hajar',
    project: 'Federated Learning',
    year: 'Junior (June 2025 - Present)',
    image: 'public/armaan.jpeg'
  }];

  return <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-primary">Our Team</h1>
      <p className="text-xl text-gray-600 mb-12">
        Meet the researchers and students driving innovation at the Distopia
        Lab.
      </p>
      {/* Principal Investigator */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">
          Principal Investigator
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img src={principalInvestigator.image} alt={principalInvestigator.name} className="w-full h-full object-cover object-center" />
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {principalInvestigator.name}
                </h3>
                <p className="text-gray-600 font-medium mb-4">
                  {principalInvestigator.role}
                </p>
                <p className="text-gray-700">{principalInvestigator.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PhD Students */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">
          PhD Students
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phDStudents.map((student, index) => <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src={student.image} alt={student.name} className="w-32 h-32 rounded-full object-cover mx-auto mb-4" />
              <h3 className="text-lg font-bold text-primary mb-1">
                {student.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{student.year}</p>
              <p className="text-gray-700">{student.research}</p>
            </div>)}
        </div>
      </section>
      {/* Master's Students */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">
          Master's Students
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mastersStudents.map((student, index) => <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src={student.image} alt={student.name} className="w-32 h-32 rounded-full object-cover mx-auto mb-4" />
              <h3 className="text-lg font-bold text-primary mb-1">
                {student.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{student.year}</p>
              <p className="text-gray-700">{student.research}</p>
            </div>)}
        </div>
      </section>
      {/* Undergraduate Students */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">
          Undergraduate Students
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {undergraduates.map((student, index) => <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src={student.image} alt={student.name} className="w-32 h-32 rounded-full object-cover mx-auto mb-4" />
              <h3 className="text-lg font-bold text-primary mb-1">
                {student.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{student.year}</p>
              <p className="text-gray-700">{student.project}</p>
            </div>)}
        </div>
      </section>
    </div>;
}