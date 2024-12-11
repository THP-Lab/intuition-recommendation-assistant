import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'; // Import Link to handle routes

const WaitingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <header className="bg-[#2f2f2f] text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-6">Awaiting Confirmation</h1>
          <p className="text-lg mb-8">Your request is being processed. Here is a summary of your request:</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-[#4f4f4f] text-gray-800 py-12">
        <div className="container mx-auto px-6">
          <section className="bg-[#3a3a3a] p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl text-white font-semibold mb-6">Request Summary</h3>
            <p className="text-lg text-white mb-4">Your request is being processed. We will notify you as soon as possible.</p>

            <div className="text-center mt-6">
              <p className="text-lg text-white mb-4">Thank you for your patience while we validate your request.</p>
              <Link
                to="/" // Using Link to navigate back to the homepage
                className="bg-blue-400 text-white px-8 py-3 rounded-full hover:bg-blue-500 transition-all"
              >
                Back to Homepage
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WaitingPage;
