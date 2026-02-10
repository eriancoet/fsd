import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6">
          Hi, I'm <span className="text-blue-600">Rian</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl">
        A UI Engineer focused on building clean, responsive interfaces with React.        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}