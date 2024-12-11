import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer"; // Import Footer
import { Link } from "react-router-dom"; // Import du Link de react-router-dom

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      <header className="bg-[#2f2f2f] text-white relative py-8">
        {" "}
        {/* Réduction de la taille du jumbotron */}
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-section max-w-lg text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-7xl font-extrabold mb-4">DecentRep</h1>
            <p className="text-xl font-light mb-6">
              Decentralized Reputation System - Powered by AI to help you create
              and request recommendations.
            </p>
            {/* Create and Request Buttons */}
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Create Button */}
              <Link to="/create">
                <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-all">
                  Create
                </button>
              </Link>
              {/* Request Button */}
              <Link to="/request">
                <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all">
                  Request
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="image-section w-full md:w-1/2 max-w-md md:max-w-lg">
            <img
              src="/img_decentrep.webp" // Remplacez par le chemin réel de l'image
              alt="DecentRep Logo"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-[#4f4f4f] text-gray-100 py-12">
        <div className="container mx-auto px-6">
          {/* Explanation Section */}
          <section className="mb-12">
            <h2 className="text-4xl font-semibold text-center text-white mb-6">
              What are Triples?
            </h2>
            <p className="text-lg text-center mb-6">
              A Triple consists of three elements:{" "}
              <span className="text-blue-400">Subject</span>,{" "}
              <span className="text-orange-400">Predicate</span>, and{" "}
              <span className="text-purple-400">Object</span>. These are the
              building blocks of our decentralized reputation system.
            </p>
            <div className="flex justify-center space-x-6">
              <div className="bg-[#3a3a3a] p-6 rounded-lg text-center">
                <h3 className="text-2xl text-blue-400 font-bold">Subject</h3>
                <p className="mt-4">
                  The entity or person (e.g., &quot;Elon Musk&quot;).
                </p>
              </div>
              <div className="bg-[#3a3a3a] p-6 rounded-lg text-center">
                <h3 className="text-2xl text-orange-400 font-bold">
                  Predicate
                </h3>
                <p className="mt-4">
                  The relationship or action (e.g., &quot;is CEO of&quot;).
                </p>
              </div>
              <div className="bg-[#3a3a3a] p-6 rounded-lg text-center">
                <h3 className="text-2xl text-purple-400 font-bold">Object</h3>
                <p className="mt-4">
                  The target of the action (e.g., &quot;Tesla&quot;).
                </p>
              </div>
            </div>
          </section>

          {/* New AI Assistant Section */}
          <section className="mb-12">
            <h2 className="text-4xl font-semibold text-center text-white mb-6">
              AI Assistant: Your Personal Recommendation Helper
            </h2>
            <p className="text-lg text-center mb-6">
              Our platform leverages an AI assistant to help users generate
              meaningful recommendations. By using the power of semantic
              Triples, the AI combines data from multiple sources to create
              personalized recommendations and endorsements.
            </p>
            <p className="text-lg text-center mb-6">
              Whether you&apos;re looking to create a recommendation or request
              one, the AI assistant ensures that the process is seamless,
              reliable, and tailored to your needs.
            </p>
            <div className="flex justify-center space-x-6">
              <div className="bg-[#3a3a3a] p-6 rounded-lg text-center">
                <h3 className="text-2xl text-blue-400 font-bold">
                  Create a Recommendation
                </h3>
                <p className="mt-4">
                  Tell us about the skills or experiences you want to endorse,
                  and the AI will help generate the perfect recommendation.
                </p>
              </div>
              <div className="bg-[#3a3a3a] p-6 rounded-lg text-center">
                <h3 className="text-2xl text-orange-400 font-bold">
                  Request a Recommendation
                </h3>
                <p className="mt-4">
                  Specify your interests or skills, and the AI will match you
                  with potential endorsers who can validate your claims.
                </p>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-white mb-6">
              Key Features
            </h2>
            <ul className="list-none space-y-4">
              <li>
                Create and link Triples to share relationships and knowledge.
              </li>
              <li>
                Explore interconnected Triples in an intuitive graph
                visualization.
              </li>
              <li>
                Request and validate recommendations seamlessly, powered by AI.
              </li>
            </ul>
          </section>

          {/* Graph Section */}
          <section className="text-center">
            <h2 className="text-4xl font-semibold text-white mb-6">
              Visualize and Interact with the Graph
            </h2>
            <p className="text-lg mb-6">
              Switch between <strong>2D, 3D, or VR</strong> views and explore
              the relationships between Triples.
            </p>
            {/* Explore the Graph Button */}
            <a
              href="https://graph.i7n.thp-lab.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-all">
                Explore the Graph
              </button>
            </a>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
