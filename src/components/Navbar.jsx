import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg mb-8">
      <div className="container mx-auto flex gap-6 items-center">
        {/* Home Link */}
        <Link to="/" className="hover:text-blue-200 font-semibold transition-colors">
          Home
        </Link>
        
        {/* Tasks Link */}
        <Link to="/tasks" className="hover:text-blue-200 font-semibold transition-colors">
          Tasks
        </Link>
      </div>
    </nav>
  );
}