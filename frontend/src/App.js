// frontend/src/App.js
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const mockListings = [
  {
    id: 1,
    title: 'MacBook Pro M2 16GB',
    price: '15,999 kr',
    location: 'Oslo',
    image: 'https://via.placeholder.com/400x300',
    category: 'Electronics'
  },
  {
    id: 2,
    title: 'Vintage Leather Sofa',
    price: '4,500 kr',
    location: 'Bergen',
    image: 'https://via.placeholder.com/400x300',
    category: 'Furniture'
  },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Raadi - Buy and Sell Locally</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Norway's modern marketplace for local goods and services" />
      </Helmet>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">Raadi</h1>
            <div className="flex-1 max-w-xl mx-8">
              <input
                type="text"
                placeholder="Search for items..."
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <nav className="flex space-x-4">
              <button className="px-3 py-2 rounded hover:bg-gray-100">Sell</button>
              <button className="px-3 py-2 rounded hover:bg-gray-100">Login</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockListings.map((item) => (
            <article key={item.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                <p className="text-gray-600 mt-2">{item.location}</p>
                <p className="text-xl font-bold text-blue-600 mt-2">{item.price}</p>
                <div className="mt-4 flex justify-between items-center">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Contact Seller
                  </button>
                  <button className="p-2 text-gray-500 hover:text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Raadi</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Company</a></li>
                <li><a href="#" className="hover:text-blue-400">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400">Safety Tips</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 Raadi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}