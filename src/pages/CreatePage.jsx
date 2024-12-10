// src/pages/CreatePage.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CreatePage = () => {
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

            {/* Explanation of Nested Triples */}
            <p className="text-lg text-center mb-8">
              In addition to using the atomic system of Triples, our AI system allows the creation of Nested Triples, enabling complex recommendations. This approach lets each part of a Triple (Subject, Predicate, Object) itself be a Triple, adding more depth and context to the recommendation.
            </p>

            {/* Nested Triple Explanation */}
            <div className="flex justify-center space-x-6 mb-8">
              <div className="bg-[#3a3a3a] p-6 rounded-lg text-center">
                <h3 className="text-2xl text-blue-400 font-bold">Subject</h3>
                <div className="mt-4 bg-[#2b2b2b] p-4 rounded-lg">
                  <p className="text-white">
                    <strong>Jean Dupont</strong> <br />
                    <span className="text-blue-400">Subject</span>: A person<br />
                    <span className="text-orange-400">Predicate</span>: Is a teacher <br />
                    <span className="text-purple-400">Object</span>: At XYZ School.
                  </p>
                </div>
              </div>
              <div className="bg-[#3a3a3a] p-6 rounded-lg text-center">
                <h3 className="text-2xl text-orange-400 font-bold">Predicate</h3>
                <div className="mt-4 bg-[#2b2b2b] p-4 rounded-lg">
                  <p className="text-white">
                    <strong>Certifies that</strong> <br />
                    <span className="text-blue-400">Subject</span>: Jean Dupont <br />
                    <span className="text-orange-400">Predicate</span>: Certifies <br />
                    <span className="text-purple-400">Object</span>: That Martin Duchemin is skilled in React.
                  </p>
                </div>
              </div>
              <div className="bg-[#3a3a3a] p-6 rounded-lg text-center">
                <h3 className="text-2xl text-purple-400 font-bold">Object</h3>
                <div className="mt-4 bg-[#2b2b2b] p-4 rounded-lg">
                  <p className="text-white">
                    <strong>Martin Duchemin</strong> <br />
                    <span className="text-blue-400">Subject</span>: Martin Duchemin <br />
                    <span className="text-orange-400">Predicate</span>: Has attended <br />
                    <span className="text-purple-400">Object</span>: React workshop.
                  </p>
                </div>
              </div>
            </div>

            {/* Text Input for AI enrichment */}
            <div className="bg-gray-200 p-4 rounded-lg shadow-md max-w-lg mx-auto mb-8">
              <textarea
                className="w-full p-4 text-gray-700 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter the text to be enriched by AI..."
                rows="6"
              />
            </div>

            {/* Submit Button */}
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all">
              Submit
            </button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreatePage;
