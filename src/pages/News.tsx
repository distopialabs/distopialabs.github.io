import React from 'react';
export function News() {
  const newsItems = [
    {
      title: 'Research Paper Accepted at Top Venue',
      date: 'March 28, 2025',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&auto=format&fit=crop',
      excerpt: 'Our paper on efficient distributed consensus mechanisms has been accepted for publication at a premier systems conference.',
      content: `
        <p>The lab's latest research on distributed consensus has been accepted at a top-tier systems conference, marking another significant contribution to the field.</p>
      `
    }
  ];
  return <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-primary">News & Updates</h1>
      <p className="text-xl text-gray-600 mb-12">
        Stay current with the latest developments, achievements, and activities
        from the Distopia Lab.
      </p>
      {/* News List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsItems.map((news) => (
          <div key={news.title + news.date} className="bg-white rounded-lg shadow-md overflow-hidden">
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
          </div>
        ))}
      </div>
    </div>;
}