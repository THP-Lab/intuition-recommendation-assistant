import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VerificationForm = () => {
  const [proposal, setProposal] = useState("Loading enriched text..."); // Texte par défaut
  const [isEditable, setIsEditable] = useState(false);
  const [triples, setTriples] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Récupérer les données de location.state
  useEffect(() => {
    console.log("Location state:", location.state);
  
    if (location.state?.triples) {
      setTriples(location.state.triples);
    }
  
    if (location.state?.enriched_text) {
      const enrichedText = location.state.enriched_text;
      setProposal(enrichedText.trim());
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

  const renderTriple = (triple) => (
    <span className="text-white mb-4 inline-block">
      <strong className="text-blue-400">Subject:</strong> {triple.subject}{" "}
      <strong className="text-orange-400">Predicate:</strong> {triple.predicate}{" "}
      <strong className="text-purple-400">Object:</strong> {triple.object}
    </span>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Section Header */}
      <header className="bg-[#2f2f2f] text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Recommendation Verification</h1>
          <p className="text-lg mb-8">
            Voici la recommandation générée par notre assistant IA. Vous pouvez la modifier avant de la soumettre.
          </p>

          {/* Affichage de la proposition */}
<div className="bg-[#3a3a3a] p-6 rounded-lg shadow-md mt-8">
  <h3 className="text-xl font-semibold text-white mb-4">Recommendation Proposal:</h3>
  <div
    className="text-white"
    dangerouslySetInnerHTML={{ __html: proposal }} // Affichage du texte avec HTML
  />
</div>


          {/* Affichage des Triples */}
          {triples.length > 0 && (
            <div className="bg-[#3a3a3a] p-6 rounded-lg shadow-md mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Generated Triples:</h3>
              <div className="text-left">
                {triples.map((triple, index) => (
                  <div key={index} className="mb-4">
                    {renderTriple(triple)}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Section principale */}
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

          {/* Boutons */}
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
