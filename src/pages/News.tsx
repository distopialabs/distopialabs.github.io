import React from 'react';
export function News() {
  const newsItems = [{
    title: 'Distopia Lab Receives $2M NSF Grant for AI Ethics Research',
    date: 'June 15, 2023',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=400&auto=format&fit=crop',
    excerpt: 'The National Science Foundation has awarded the Distopia Lab a $2 million grant to study ethical considerations in machine learning algorithms.',
    content: `
        <p>The National Science Foundation (NSF) has awarded the Distopia Lab at the University of Oregon a $2 million grant to advance research on ethical considerations in machine learning algorithms. The three-year project, titled "Ethical AI: Developing Frameworks for Responsible Machine Learning," will focus on creating practical tools and guidelines for developers and organizations to ensure their AI systems are fair, transparent, and accountable.</p>
        <p>"This grant represents a significant opportunity to bridge the gap between AI ethics theory and practice," said Dr. Sarah Chen, Director of the Distopia Lab and principal investigator on the project. "Our goal is to create actionable frameworks that can be implemented across various domains, from healthcare to criminal justice to financial services."</p>
        <p>The research team will collaborate with industry partners and community organizations to ensure the resulting frameworks address real-world challenges and can be practically implemented. The project will also include developing educational resources for computer science students and professionals.</p>
      `
  }, {
    title: 'New Partnership with Tech Industry Leaders Announced',
    date: 'May 3, 2023',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=400&auto=format&fit=crop',
    excerpt: 'Distopia Lab partners with leading tech companies to develop guidelines for responsible technology development.',
    content: `
        <p>The Distopia Lab at the University of Oregon has announced a new partnership with several leading technology companies to develop comprehensive guidelines for responsible technology development. The initiative, called "Responsible Tech Alliance," brings together researchers from the lab with engineers, product managers, and policy experts from the technology industry.</p>
        <p>"Technology companies are increasingly aware of their responsibility to consider the societal impacts of their products," said Dr. Marcus Johnson, who will lead the partnership. "This alliance creates a space for collaborative problem-solving between academia and industry."</p>
        <p>The partnership will focus on developing practical guidelines that address issues such as privacy protection, algorithmic transparency, and inclusive design. The resulting framework will be openly published and promoted as a standard for the technology industry.</p>
        <p>Participating companies include several Fortune 500 technology firms as well as promising startups committed to ethical innovation. The first working group meeting is scheduled for next month, with preliminary guidelines expected to be published by the end of the year.</p>
      `
  }, {
    title: 'Distopia Lab Researchers Present at ICML Conference',
    date: 'April 22, 2023',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format&fit=crop',
    excerpt: "Lab members presented groundbreaking research on bias mitigation in machine learning at this year's International Conference on Machine Learning.",
    content: `
        <p>Researchers from the Distopia Lab made a significant impact at this year's International Conference on Machine Learning (ICML), presenting three papers on bias mitigation in machine learning systems. The work, led by Dr. Sarah Chen and PhD candidates Kai Zhang and Olivia Washington, introduces novel techniques for identifying and addressing biases in training data and model outputs.</p>
        <p>"Our approach combines statistical methods with domain expertise to create more robust bias detection," explained Zhang, lead author on one of the papers. "What sets our work apart is that we've demonstrated these techniques can be implemented without significant performance tradeoffs."</p>
        <p>The team's research has already attracted attention from both academic peers and industry practitioners. One paper, "Intersectional Bias Mitigation in Classification Systems," received the conference's Outstanding Paper Award.</p>
        <p>"This recognition validates the direction of our research," said Dr. Chen. "We're working to ensure that machine learning systems don't perpetuate or amplify existing societal biases, and it's encouraging to see the field embracing this priority."</p>
      `
  }, {
    title: 'Community Digital Literacy Program Launches',
    date: 'March 10, 2023',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop',
    excerpt: 'Distopia Lab initiates a community program to improve digital literacy and privacy awareness in underserved communities.',
    content: `
        <p>The Distopia Lab has launched a new community outreach program aimed at improving digital literacy and privacy awareness in underserved communities around Eugene, Oregon. The program, called "Digital Empowerment Initiative," will offer free workshops, one-on-one assistance, and educational resources to community members.</p>
        <p>"Digital literacy is increasingly essential for full participation in society," said Dr. Aisha Patel, who leads the initiative. "Our goal is to ensure that everyone has the knowledge and skills to navigate digital spaces safely and effectively, regardless of their background or resources."</p>
        <p>The program will address topics such as online privacy protection, identifying misinformation, secure communication tools, and accessing digital government services. Workshops will be offered in multiple languages and at various community centers to ensure accessibility.</p>
        <p>The initiative is supported by a combination of university funding and a grant from the Digital Equity Foundation. Graduate and undergraduate students from the lab will serve as instructors and mentors, gaining valuable experience in community engagement while providing an important service.</p>
      `
  }, {
    title: 'PhD Student Wins Prestigious Fellowship',
    date: 'February 5, 2023',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400&auto=format&fit=crop',
    excerpt: 'Zoe Kim receives the Computing for Social Good Fellowship for her work on technology policy and digital rights.',
    content: `
        <p>Zoe Kim, a first-year PhD student at the Distopia Lab, has been awarded the prestigious Computing for Social Good Fellowship for her research on technology policy and digital rights. The fellowship, which provides $50,000 in research funding and professional development opportunities, recognizes early-career researchers whose work addresses significant societal challenges.</p>
        <p>"I'm honored to receive this support for my research," said Kim. "My work focuses on developing policy frameworks that protect individual rights while enabling beneficial technological innovation, and this fellowship will allow me to expand the scope and impact of this research."</p>
        <p>Kim's current project examines how different regulatory approaches to facial recognition technology affect both civil liberties and legitimate uses in areas such as security and accessibility. Her work combines technical analysis with legal and ethical considerations.</p>
        <p>"Zoe exemplifies the interdisciplinary approach that defines the Distopia Lab," said Dr. Aisha Patel, Kim's advisor. "Her ability to bridge technical understanding with policy implications makes her research particularly valuable in addressing complex digital rights issues."</p>
        <p>The fellowship will support Kim's research for the next two years, including funding for community engagement activities to ensure her policy recommendations reflect diverse perspectives.</p>
      `
  }];
  return <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-primary">News & Updates</h1>
      <p className="text-xl text-gray-600 mb-12">
        Stay current with the latest developments, achievements, and activities
        from the Distopia Lab.
      </p>
      {/* News List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsItems.slice(1).map((news, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-sm text-gray-500">{news.date}</span>
              <h3 className="text-xl font-bold text-primary my-2">
                {news.title}
              </h3>
              <p className="text-gray-700 mb-4">{news.excerpt}</p>
              <a href="#" className="text-primary hover:text-primary/80 font-medium">
                Continue Reading →
              </a>
            </div>
          </div>)}
      </div>
    </div>;
}