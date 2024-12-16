import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CreatePage = () => {
  const [inputText, setInputText] = useState('');
  const [generatedTriples, setGeneratedTriples] = useState([]);
  const [enrichedText, setEnrichedText] = useState(''); // Stockage du texte enrichi
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize navigation function

  // Function to send text to the Rails API and get triples
  const handleGenerateTriples = async () => {
    if (!inputText) return; // Ne pas envoyer si le texte est vide
  
    setLoading(true); // Afficher le loader pendant l'appel API
  
    try {
      // Envoi du texte à l'API Rails pour générer les triples
      const response = await axios.post('http://127.0.0.1:3042/nlp/generate', { prompt: inputText });
  
      console.log('Réponse complète de l\'API:', response.data);
  
      // Vérifiez si les données sont présentes dans la réponse
      if (response.data) {
        // Récupérer les triples et le texte enrichi
        const triples = response.data.triples || [];
        const enriched = response.data.enriched_text || '';
  
        setGeneratedTriples(triples);
        setEnrichedText(enriched);
  
        // Redirection vers la page de vérification avec les triples et le texte enrichi
        navigate('/verification?source=create', { state: { triples, enriched_text: enriched } });
      } else {
        console.error('Aucune donnée trouvée dans la réponse:', response.data);
      }
    } catch (error) {
      console.error('Erreur lors de la génération des triples', error);
    } finally {
      setLoading(false); // Cacher le loader
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Main Content */}
      <main className="bg-[#4f4f4f] text-gray-100 pt-32">
        <div className="container mx-auto px-6 py-12">
          {/* Create with AI Assistant Section */}
          <section className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-white mb-6">Create with AI Assistant</h2>
            <p className="text-lg text-center mb-6">
              Our AI assistant will help you create meaningful recommendations by enriching your input text and organizing it into Triples (Subject, Predicate, Object).
            </p>

            {/* Diagram for Triples */}
            <div className="flex justify-center space-x-6 mb-8">
              <div className="bg-[#3a3a3a] p-6 rounded-lg text-center">
                <h3 className="text-2xl text-blue-400 font-bold">Subject</h3>
                <p className="mt-4">The entity or person (e.g., &quot;Elon Musk&quot;).</p>
              </div>
              <div className="bg-[#3a3a3a] p-6 rounded-lg text-center">
                <h3 className="text-2xl text-orange-400 font-bold">Predicate</h3>
                <p className="mt-4">The relationship or action (e.g., &quot;is CEO of&quot;).</p>
              </div>
              <div className="bg-[#3a3a3a] p-6 rounded-lg text-center">
                <h3 className="text-2xl text-purple-400 font-bold">Object</h3>
                <p className="mt-4">The target of the action (e.g., &quot;Tesla&quot;).</p>
              </div>
            </div>

            {/* Text Input for AI enrichment */}
            <div className="bg-gray-200 p-4 rounded-lg shadow-md max-w-lg mx-auto mb-8">
              <textarea
                className="w-full p-4 text-gray-700 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter the text to be enriched by AI..."
                rows="6"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleGenerateTriples}
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all"
              disabled={loading} // Disable button during loading
            >
              {loading ? 'Generating...' : 'Generate Triples'}
            </button>

            {/* Display Enriched Text */}
            {enrichedText && (
              <div className="bg-gray-300 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold text-gray-700">Enriched Text:</h3>
                <p className="mt-4 text-gray-800">{enrichedText}</p>
              </div>
            )}

            {/* Display Generated Triples */}
            {generatedTriples.length > 0 && (
              <div className="bg-gray-300 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold text-gray-700">Generated Triples:</h3>
                <ul className="mt-4">
                  {generatedTriples.map((triple, index) => (
                    <li key={index} className="py-2">
                      <strong>Subject:</strong> {triple.subject} <br />
                      <strong>Predicate:</strong> {triple.predicate} <br />
                      <strong>Object:</strong> {JSON.stringify(triple.object, null, 2)} <br />
                      <hr />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreatePage;
