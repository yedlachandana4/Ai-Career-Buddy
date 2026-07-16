import { Routes, Route, Link } from "react-router-dom";
import { Home, Briefcase, FileText, MessageCircle, User } from "lucide-react";

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-3xl font-bold">🤖 AI Career Buddy</h1>

          <nav className="flex gap-6 text-lg">
            <Link to="/" className="hover:text-cyan-300">Home</Link>
            <Link to="/resume" className="hover:text-cyan-300">Resume</Link>
            <Link to="/jobs" className="hover:text-cyan-300">Jobs</Link>
            <Link to="/chat" className="hover:text-cyan-300">AI Chat</Link>
            <Link to="/profile" className="hover:text-cyan-300">Profile</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-5xl font-bold text-slate-800 mb-6">
          Your AI Career Assistant
        </h2>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Build ATS-friendly resumes, prepare for interviews, discover jobs,
          and receive personalized career guidance powered by AI.
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg">
            Get Started
          </button>

          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <FeatureCard
          icon={<FileText size={42} />}
          title="Resume Builder"
          description="Create ATS-friendly resumes in minutes."
        />

        <FeatureCard
          icon={<Briefcase size={42} />}
          title="Job Search"
          description="Find internships and jobs tailored to your skills."
        />

        <FeatureCard
          icon={<MessageCircle size={42} />}
          title="AI Career Chat"
          description="Ask career questions and receive AI guidance."
        />

        <FeatureCard
          icon={<User size={42} />}
          title="Mock Interview"
          description="Practice interviews with AI feedback."
        />

      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
      <div className="text-blue-600 mb-4">{icon}</div>

      <h3 className="text-2xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-slate-600">
        {description}
      </p>
    </div>
  );
}

function ResumePage() {
  return (
    <div className="p-10 text-center text-3xl font-bold">
      📄 Resume Builder (Coming Soon)
    </div>
  );
}

function JobsPage() {
  return (
    <div className="p-10 text-center text-3xl font-bold">
      💼 Job Search (Coming Soon)
    </div>
  );
}

function ChatPage() {
  return (
    <div className="p-10 text-center text-3xl font-bold">
      🤖 AI Chat (Coming Soon)
    </div>
  );
}

function ProfilePage() {
  return (
    <div className="p-10 text-center text-3xl font-bold">
      👤 User Profile (Coming Soon)
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}
