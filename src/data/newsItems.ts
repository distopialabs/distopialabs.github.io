export interface NewsItem {
  title: string;
  date: string;
  isoDate: string;
  excerpt: string;
  content: string;
  slug: string;
  category: string;
  author?: string;
}

export const newsItems: NewsItem[] = [
  {
    title: 'Nihal Balivada and Armaan Hajar Reach Round 2 of ACM PACT 2025 SRC',
    date: 'September 2025',
    isoDate: '2025-09-10',
    slug: 'nihal-balivada-armaan-hajar-acm-pact-2025-src',
    category: 'Student Spotlight',
    author: 'Distopia Lab Communications Team',
    excerpt: 'Two lab members advance to the second round of the prestigious Student Research Competition in graduate and undergraduate categories.',
    content: `
      <p>We are thrilled to announce that Nihal Balivada (PhD student) and Armaan Hajar (undergraduate) have both reached Round 2 of the ACM PACT 2025 Student Research Competition. Their submissions showcase experimental evaluations of consensus protocols that balance energy efficiency with strong consistency.</p>
      <p>The ACM PACT SRC recognizes breakthrough research from early-career scientists. Advancing to the second round demonstrates the lab's momentum in cultivating contributions from both graduate and undergraduate researchers.</p>
    `
  },
  {
    title: 'Armaan Hajar Receives CURE Travel Award for ACM PACT 2025',
    date: 'September 2025',
    isoDate: '2025-09-03',
    slug: 'armaan-hajar-cure-travel-award-acm-pact-2025',
    category: 'Awards',
    excerpt: 'Undergraduate researcher Armaan Hajar awarded prestigious travel funding from the Center for Undergraduate Research and Engagement.',
    content: `
      <p>Armaan Hajar has been selected to receive a Center for Undergraduate Research and Engagement (CURE) travel award to attend ACM PACT 2025. The award provides travel support for outstanding undergraduate researchers presenting at premier conferences.</p>
      <p>Hajar will showcase collaborative work on energy-aware federated learning pipelines, reinforcing the lab’s commitment to hands-on mentorship for emerging scholars.</p>
    `
  },
  {
    title: 'Poster "Samurai: Slash your decentralized Storage" Accepted at OSDI 2025',
    date: 'May 2025',
    isoDate: '2025-05-12',
    slug: 'samurai-decentralized-storage-osdi-2025',
    category: 'Publications',
    author: 'Samurai Project Team',
    excerpt: 'Our innovative approach to decentralized storage optimization will be presented at the premier systems conference.',
    content: `
      <p>The Distopia Lab's poster on "Samurai: Slash your decentralized Storage" has been accepted at OSDI 2025, one of the top venues for systems research. Samurai introduces adaptive erasure coding that reduces data replication overhead while retaining Byzantine fault tolerance.</p>
      <p>The project includes an open benchmarking harness that compares decentralized storage backends across trace-driven workloads. Poster attendees will be able to explore the design trade-offs in person.</p>
    `
  },
  {
    title: 'Nihal Balivada Wins 4th Prize in UO CS Graduate Research Symposium',
    date: 'May 2025',
    isoDate: '2025-05-02',
    slug: 'nihal-balivada-uo-cs-graduate-research-symposium-2025',
    category: 'Awards',
    excerpt: 'PhD student Nihal Balivada recognized for outstanding graduate research at the University of Oregon Computer Science symposium.',
    content: `
      <p>Nihal Balivada was awarded 4th prize at the University of Oregon CS Graduate Research Symposium for presenting progress on cross-consensus communication pathways. The recognition highlights rigorous evaluation of blockchain interoperability strategies.</p>
      <p>The symposium brings together graduate researchers across the department to share work-in-progress results and gather cross-disciplinary feedback.</p>
    `
  },
  {
    title: 'Dr. Suyash Gupta receives Distinguished Reviewer Award for SIGMOD 2025',
    date: 'April 2025',
    isoDate: '2025-04-18',
    slug: 'suyash-gupta-distinguished-reviewer-sigmod-2025',
    category: 'Recognition',
    author: 'ACM SIGMOD Program Committee',
    excerpt: 'Dr. Gupta receives recognition for outstanding service to the database systems research community.',
    content: `
      <p>Dr. Gupta has been honored with a Distinguished Reviewer Award for SIGMOD 2025, recognizing high-quality and timely peer review contributions to the database community.</p>
      <p>The award reflects Distopia Lab’s commitment to advancing scholarly rigor in distributed data management.</p>
    `
  },
  {
    title: 'Shistata Subedi Awarded 2025 Frank Vignola Micro Grant',
    date: 'April 2025',
    isoDate: '2025-04-05',
    slug: 'shistata-subedi-2025-frank-vignola-micro-grant',
    category: 'Funding',
    excerpt: 'PhD student Shistata Subedi receives funding support for blockchain infrastructure research through the prestigious Frank Vignola Micro Grant program.',
    content: `
      <p>Shistata Subedi has been selected to receive the 2025 Frank Vignola Micro Grant, providing crucial funding support for blockchain infrastructure research. The micro grant will accelerate sampling campaigns that profile performance bottlenecks in decentralized storage.</p>
      <p>We look forward to sharing preliminary results from this work in upcoming seminars and community talks.</p>
    `
  },
  {
    title: 'Paper "Picsou: Enabling Efficient Cross-Consensus Communication" Accepted at OSDI 2025',
    date: 'March 2025',
    isoDate: '2025-03-22',
    slug: 'picsou-cross-consensus-communication-osdi-2025',
    category: 'Publications',
    author: 'Picsou Project Team',
    excerpt: 'Breakthrough research on cross-consensus communication protocols to be presented at the premier operating systems conference.',
    content: `
      <p>Our paper "Picsou: Enabling Efficient Cross-Consensus Communication" has been accepted for publication at OSDI 2025. Picsou proposes checkpoint-backed batching that accelerates throughput when bridging assets across heterogeneous blockchains.</p>
      <p>The submission includes open-source tooling for reproducible experiments, enabling other researchers to evaluate interoperability design points.</p>
    `
  },
  {
    title: 'Paper "HotStuff-1: Linear Consensus with One-Phase Speculation" Accepted at SIGMOD 2025',
    date: 'February 2025',
    isoDate: '2025-02-15',
    slug: 'hotstuff-one-phase-speculation-sigmod-2025',
    category: 'Publications',
    excerpt: 'Innovative consensus algorithm research advancing the state-of-the-art in distributed database systems.',
    content: `
      <p>The Distopia Lab's paper "HotStuff-1: Linear Consensus with One-Phase Speculation" has been accepted at SIGMOD 2025. The work collapses multiple consensus phases into a single speculative round, reducing commit latency for geo-distributed databases.</p>
      <p>HotStuff-1 builds on the lab’s ongoing collaboration with the Oregon Networking Research Group, bringing database and networking perspectives together.</p>
    `
  }
];
