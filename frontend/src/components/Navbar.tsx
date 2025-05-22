import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <div className="font-bold text-xl"> 
        <Link to="/" className="text-blue-500">Media Tracker</Link>
        </div>
      <div className="space-x-4">
        <Link to="/login" className="text-blue-500">Login</Link>
        <Link to="/signup" className="text-blue-500">Sign Up</Link>
        <Link to="/media" className="text-blue-500">My Collection</Link>
      </div>
    </nav>
  );
}