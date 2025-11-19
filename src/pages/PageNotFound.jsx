import { AlertTriangle } from "lucide-react"; // Using an icon
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    // Center content vertically and horizontally within the main layout area
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
      <AlertTriangle className="w-16 h-16 mb-6 text-yellow-500" />

      <h1 className="mb-2 text-6xl font-bold text-slate-800">404</h1>
      <h2 className="mb-4 text-3xl font-semibold text-slate-700">
        Page Not Found
      </h2>

      <p className="max-w-md mb-8 text-lg text-slate-600">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>

      <Link
        to="/" // Link back to the homepage
        className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white transition-colors rounded-full shadow-md bg-brand-primary hover:bg-brand-dark"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound;
