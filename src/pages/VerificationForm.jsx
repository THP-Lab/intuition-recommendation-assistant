import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VerificationForm = () => {
  const [proposal, setProposal] = useState(
    "Proposition de recommandation générée par l'IA."
  );
  const [isEditable, setIsEditable] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Extraire le paramètre 'source' de l'URL
  const source = new URLSearchParams(location.search).get("source");

  const handleSubmit = () => {
    if (source === "request") {
      navigate("/waitingpage"); // Rediriger vers la page d'attente
    } else if (source === "create") {
      navigate("/confirmationpage"); // Rediriger vers la page de confirmation
    }
  };

  const handleShare = () => {
    const url = window.location.href;
    alert(`Partagez cette URL : ${url}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <header className="bg-[#2f2f2f] text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">
            Vérification de la recommandation
          </h1>
          <p className="text-lg mb-8">
            Voici la proposition de recommandation générée par notre assistant
            IA. Vous pouvez la modifier avant de la soumettre.
          </p>
          <p className="text-lg mb-8">
              Veuillez vérifier si cette recommandation correspond à ce que vous souhaitez avant de la soumettre. Si vous avez des modifications à apporter, n&apos;hésitez pas à les faire.
            </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-[#4f4f4f] text-gray-800 py-12">
        <div className="container mx-auto px-6">
          <section className="mb-12">
            <div className="bg-[#3a3a3a] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl text-white font-semibold mb-6">
                Proposition de recommandation
              </h3>
              <textarea
                value={proposal}
                onChange={(e) => setProposal(e.target.value)}
                disabled={!isEditable}
                className="w-full mt-4 p-6 bg-gray-300 text-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="6"
              />
            </div>
          </section>

          {/* Buttons aligned on the same line */}
          <section className="flex justify-center space-x-6 mb-12">
            <button
              onClick={handleShare}
              className="bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition-all"
            >
              Partager cette proposition
            </button>
            <button
              onClick={() => setIsEditable(!isEditable)}
              className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all"
            >
              {isEditable ? "Verrouiller" : "Modifier"}
            </button>
            <button
              onClick={handleSubmit}
              className="bg-violet-500 text-white px-8 py-4 rounded-full hover:bg-violet-600 transition-all"
            >
              Soumettre la recommandation
            </button>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VerificationForm;
