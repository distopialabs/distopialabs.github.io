import React from 'react';
import { Helmet } from 'react-helmet-async';
import { newsItems } from '../data/newsItems';

export function News() {
  return <>
      <Helmet>
        <title>News & Updates | Distopia Lab Announcements</title>
        <link rel="canonical" href="https://distopialabs.github.io/news" />
        <meta name="description" content="Distopia Lab announcements covering paper acceptances, student awards, and community outreach." />
        <meta property="og:title" content="Distopia Lab News" />
        <meta property="og:description" content="Stay current on Distopia Lab publications, awards, and collaborative milestones." />
        <meta property="og:url" content="https://distopialabs.github.io/news" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://distopialabs.github.io/distopialogo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Distopia Lab News" />
        <meta name="twitter:description" content="Recent achievements and events from the Distopia Lab." />
        <meta name="twitter:image" content="https://distopialabs.github.io/distopialogo.png" />
      </Helmet>
      <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-primary">News & Updates</h1>
      <p className="text-xl text-gray-600 mb-12">
        Stay current with the latest developments, achievements, and activities
        from the Distopia Lab.
      </p>
      {/* News List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsItems.map((news) => (
          <article key={news.slug} id={news.slug} className="bg-white rounded-lg shadow-md p-6">
            <span className="text-xs uppercase tracking-wide text-primary/80 font-semibold">{news.category}</span>
            <span className="block text-sm text-gray-500">{news.date}</span>
            <h3 className="text-xl font-bold text-primary my-2">
              {news.title}
            </h3>
            <p className="text-gray-700 mb-4">{news.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
    </>;
}
