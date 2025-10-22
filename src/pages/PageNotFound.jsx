import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react'; // Using an icon

function PageNotFound() {
  return (
    // Center content vertically and horizontally within the main layout area
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
      
      <AlertTriangle className="w-16 h-16 text-yellow-500 mb-6" />
      
      <h1 className="text-6xl font-bold text-slate-800 mb-2">404</h1>
      <h2 className="text-3xl font-semibold text-slate-700 mb-4">Page Not Found</h2>
      
      <p className="text-lg text-slate-600 mb-8 max-w-md">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      
      <Link
        to="/" // Link back to the homepage
        className="inline-flex items-center px-6 py-3 rounded-full bg-brand-primary text-white font-semibold text-lg shadow-md hover:bg-brand-dark transition-colors"
      >
        Go Back Home
      </Link>
      
    </div>
  );
}

export default PageNotFound;