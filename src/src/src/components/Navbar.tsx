import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-white">
          🤖 AI Career Buddy
        </h1>

        <nav className="flex gap-6 text-white font-medium">
          <Link to="/">Home</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/chat">AI Chat</Link>
          <Link to="/profile">Profile</Link>
        </nav>

      </div>
    </header>
  );
}
