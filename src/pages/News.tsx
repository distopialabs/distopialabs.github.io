import React from 'react';
import { newsItems } from '../data/newsItems';

export function News() {
  return <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-primary">News & Updates</h1>
      <p className="text-xl text-gray-600 mb-12">
        Stay current with the latest developments, achievements, and activities
        from the Distopia Lab.
      </p>
      {/* News List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsItems.map((news) => (
          <div key={news.title + news.date} className="bg-white rounded-lg shadow-md p-6">
            <span className="text-sm text-gray-500">{news.date}</span>
            <h3 className="text-xl font-bold text-primary my-2">
              {news.title}
            </h3>
            <p className="text-gray-700 mb-4">{news.excerpt}</p>
          </div>
        ))}
      </div>
    </div>;
}