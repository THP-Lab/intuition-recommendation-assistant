import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RequestPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Main Content */}
      <main className="bg-[#4f4f4f] text-gray-100 pt-32">
        <div className="container mx-auto px-6 py-12">
          {/* Request with AI Assistant Section */}
          <section className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-white mb-6">Request with AI Assistant</h2>
            <p className="text-lg text-center mb-6">
              Our AI assistant will guide you in formulating your recommendation request by helping organize it into Triples (Subject, Predicate, Object) and refining your input text.
            </p>
            
            {/* Diagram for Initial Request */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-semibold text-white mb-4">Example: Initial Request</h3>
              <p className="text-lg mb-6">
                Imagine you submit a recommendation request like: <br />
                <em>&quot;I am the best in the world at React&quot;</em>
              </p>
              <div className="flex justify-center space-x-6">
                <div className="bg-[#3a3a3a] p-6 rounded-lg text-center">
                  <h4 className="text-2xl text-blue-400 font-bold">Subject</h4>
                  <p className="mt-4">I (the requester)</p>
                </div>
                <div className="bg-[#3a3a3a] p-6 rounded-lg text-center">
                  <h4 className="text-2xl text-orange-400 font-bold">Predicate</h4>
                  <p className="mt-4">am the best in the world at</p>
                </div>
                <div className="bg-[#3a3a3a] p-6 rounded-lg text-center">
                  <h4 className="text-2xl text-purple-400 font-bold">Object</h4>
                  <p className="mt-4">React</p>
                </div>
              </div>
            </div>

            {/* Diagram for Validated Recommendation */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-semibold text-white mb-4">Example: Validated Recommendation</h3>
              <p className="text-lg mb-6">
                After review, the approver refines the recommendation to: <br />
                <em>&quot;You are good at React&quot;</em>
              </p>
              <div className="flex justify-center space-x-6">
                <div className="bg-[#3a3a3a] p-6 rounded-lg text-center">
                  <h4 className="text-2xl text-blue-400 font-bold">Subject</h4>
                  <p className="mt-4">You (the requester)</p>
                </div>
                <div className="bg-[#3a3a3a] p-6 rounded-lg text-center">
                  <h4 className="text-2xl text-orange-400 font-bold">Predicate</h4>
                  <p className="mt-4">are good at</p>
                </div>
                <div className="bg-[#3a3a3a] p-6 rounded-lg text-center">
                  <h4 className="text-2xl text-purple-400 font-bold">Object</h4>
                  <p className="mt-4">React</p>
                </div>
              </div>
            </div>

            {/* Text Input for AI Assistance */}
            <p className="text-lg text-center mb-8">
              Use the text area below to describe your recommendation request. Our AI assistant will help refine and structure it into meaningful triples.
            </p>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md max-w-lg mx-auto mb-8">
              <textarea
                className="w-full p-4 text-gray-700 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter the text for your recommendation request..."
                rows="6"
              />
            </div>

            {/* Submit Button */}
            <Link to="/verificationform?source=request">
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all">
                Submit Request
              </button>
            </Link>

          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RequestPage;
