import { useEffect } from 'react';
import { newsItems } from '../data/newsItems';

const BASE_URL = 'https://distopialabs.github.io';

export function SEOStructuredData() {
  useEffect(() => {
    const navigationLinks = [{
      name: 'Home',
      path: '/'
    }, {
      name: 'People',
      path: '/people'
    }, {
      name: 'Projects',
      path: '/projects'
    }, {
      name: 'Publications',
      path: '/publications'
    }, {
      name: 'News',
      path: '/news'
    }, {
      name: 'Contact',
      path: '/contact'
    }];

    const newsArticles = newsItems.slice(0, 6).map((item) => ({
      '@type': 'NewsArticle',
      '@id': `${BASE_URL}/news#${item.slug}`,
      headline: item.title,
      datePublished: item.isoDate,
      dateModified: item.isoDate,
      url: `${BASE_URL}/news#${item.slug}`,
      articleSection: item.category,
      publisher: {
        '@id': `${BASE_URL}/#organization`
      },
      author: item.author ? {
        '@type': 'Person',
        name: item.author
      } : {
        '@id': `${BASE_URL}/#organization`
      },
      description: item.excerpt
    }));

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${BASE_URL}/#organization`,
          name: 'Distopia Lab',
          alternateName: 'Distopia Laboratory',
          description: 'Distributed systems research lab specializing in federated learning, blockchain consensus mechanisms, and decentralized technologies at the University of Oregon.',
          url: BASE_URL,
          logo: `${BASE_URL}/distopialogo.png`,
          image: `${BASE_URL}/distopialogo.png`,
          sameAs: ['https://github.com/distopialabs'],
          parentOrganization: {
            '@type': 'CollegeOrUniversity',
            name: 'University of Oregon',
            department: {
              '@type': 'Organization',
              name: 'School of Computer and Data Sciences'
            }
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1585 E 13th Ave',
            addressLocality: 'Eugene',
            addressRegion: 'OR',
            postalCode: '97403',
            addressCountry: 'US'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'suyash@uoregon.edu',
            contactType: 'Research Inquiries'
          }
        },
        {
          '@type': 'Person',
          '@id': `${BASE_URL}/#director`,
          name: 'Dr. Suyash Gupta',
          jobTitle: 'Principal Investigator & Lab Director',
          affiliation: {
            '@id': `${BASE_URL}/#organization`
          },
          email: 'suyash@uoregon.edu',
          knowsAbout: ['Distributed Systems', 'Federated Learning', 'Blockchain Technology', 'Consensus Mechanisms', 'Decentralized Systems']
        },
        {
          '@type': 'ResearchProject',
          name: 'Distributed Systems Research',
          url: `${BASE_URL}/projects`,
          description: 'Research in federated learning, blockchain consensus mechanisms, and decentralized systems.',
          researcher: {
            '@id': `${BASE_URL}/#director`
          },
          funder: {
            '@type': 'Organization',
            name: 'National Science Foundation'
          },
          keywords: ['federated learning', 'blockchain', 'consensus mechanisms', 'distributed systems', 'decentralized storage', 'cross-chain communication']
        },
        {
          '@type': 'WebSite',
          '@id': `${BASE_URL}/#website`,
          url: BASE_URL,
          name: 'Distopia Lab',
          publisher: {
            '@id': `${BASE_URL}/#organization`
          },
          description: 'Distopia Lab at the University of Oregon advances distributed systems, blockchain infrastructure, and federated learning research.',
          potentialAction: {
            '@type': 'SearchAction',
            target: `${BASE_URL}/?s={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        },
        ...navigationLinks.map((link) => ({
          '@type': 'SiteNavigationElement',
          name: link.name,
          url: `${BASE_URL}${link.path}`
        })),
        ...newsArticles
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
