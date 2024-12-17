import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VerificationForm = () => {
  const [proposal, setProposal] = useState("Loading enriched text...");
  const [isEditable, setIsEditable] = useState(false);
  const [triples, setTriples] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("Location state:", location.state);

    if (location.state?.triples) {
      const validTriples = location.state.triples.filter(
        (t) => t.subject && t.predicate && t.object
      );
      setTriples(validTriples);
    } else {
      console.warn("No valid triples found in location.state.");
      setTriples([]);
    }

    if (location.state?.enriched_text) {
      const enrichedText = location.state.enriched_text.trim();
      setProposal(enrichedText);
      console.log("Enriched Text:", enrichedText);
    } else {
      console.log("Enriched text is missing");
      setProposal("No enriched text found. Please verify your data.");
    }
  }, [location.state]);

  const handleSubmit = () => {
    const source = new URLSearchParams(location.search).get("source");
    if (source === "request") {
      navigate("/waitingpage");
    } else if (source === "create") {
      navigate("/confirmationpage");
    }
  };

  const handleShare = () => {
    const url = window.location.href;
    alert(`Share this URL: ${url}`);
  };

  // Fonction récursive pour afficher un triple ou un sous-triple
  const renderTriple = (triple) => {
    const renderObject = (obj) => {
      if (Array.isArray(obj)) {
        // Gérer les objets sous forme de tableau
        return (
          <div className="ml-4 mt-2 border-l-2 border-gray-600 pl-4">
            {obj.map((item, index) => (
              <div key={index} className="mb-2">
                {renderTriple(item)}
              </div>
            ))}
          </div>
        );
      } else if (typeof obj === "object" && obj !== null) {
        // Gérer les objets sous forme d'objet imbriqué
        return (
          <div className="ml-4 mt-2 border-l-2 border-gray-600 pl-4">
            {renderTriple(obj)}
          </div>
        );
      } else {
        // Gérer les objets simples (chaînes ou nombres)
        return <span className="text-purple-400">{String(obj)}</span>;
      }
    };

    return (
      <div className="text-white mb-4">
        <span className="text-blue-400">{String(triple.subject)} </span>
        <span className="text-orange-400">{String(triple.predicate)} </span>
        <span className="text-purple-400">{renderObject(triple.object)}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <header className="bg-[#2f2f2f] text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Recommendation Verification</h1>
          <p className="text-lg mb-8">
            Voici la recommandation générée par notre assistant IA. Vous pouvez la modifier avant de la soumettre.
          </p>

          <div className="bg-[#3a3a3a] p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">Recommendation Proposal:</h3>
            <div
              className="text-white"
              dangerouslySetInnerHTML={{
                __html: typeof proposal === "string" ? proposal : "Invalid content",
              }}
            />
          </div>

          {triples.length > 0 ? (
            <div className="bg-[#3a3a3a] p-6 rounded-lg shadow-md mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Generated Triples:</h3>
              <div className="text-left">
                {triples.map((triple, index) => (
                  <div key={index}>{renderTriple(triple)}</div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-red-500 mt-8">No valid triples to display.</p>
          )}
        </div>
      </header>

      <main className="bg-[#4f4f4f] text-gray-800 py-12">
        <div className="container mx-auto px-6">
          <section className="mb-12">
            <div className="bg-[#3a3a3a] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl text-white font-semibold mb-6">Edit Recommendation Proposal</h3>
              <textarea
                value={proposal}
                onChange={(e) => setProposal(e.target.value)}
                disabled={!isEditable}
                className="w-full mt-4 p-6 bg-gray-300 text-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="6"
              />
            </div>
          </section>

          <section className="flex justify-center space-x-6 mb-12">
            <button
              onClick={handleShare}
              className="bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition-all"
            >
              Share this Proposal
            </button>
            <button
              onClick={() => setIsEditable(!isEditable)}
              className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all"
            >
              {isEditable ? "Lock" : "Edit"}
            </button>
            <button
              onClick={handleSubmit}
              className="bg-violet-500 text-white px-8 py-4 rounded-full hover:bg-violet-600 transition-all"
            >
              Submit Recommendation
            </button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VerificationForm;
