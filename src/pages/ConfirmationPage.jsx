import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'; // Import Link to handle routes

const ConfirmationPage = () => {
  const url = window.location.href; // Current page URL

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <header className="bg-[#2f2f2f] text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-6">Recommendation Confirmation</h1>
          <p className="text-lg mb-8">Your recommendation has been successfully created. Here is a summary of your request:</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-[#4f4f4f] text-gray-800 py-12">
        <div className="container mx-auto px-6">
          <section className="bg-[#3a3a3a] p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl text-white font-semibold mb-6">Recommendation Summary</h3>
            <p className="text-lg text-white mb-4">Your recommendation has been successfully generated. You can share this page with others:</p>
            <p className="text-lg text-white mb-4">
              <strong>Recommendation URL: </strong>{url}
            </p>

            <div className="text-center mt-6">
              <a
                href="https://graph.i7n.thp-lab.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-all"
              >
                View the Recommendation in the Graph
              </a>
            </div>
          </section>

          {/* Optional Next Steps Section */}
          <section className="text-center">
            <p className="text-lg text-white mb-4">
              You can now view your recommendation in the graph or share it with others to gather feedback.
            </p>
            <Link
              to="/" // Using Link to redirect to the homepage
              className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all"
            >
              Back to Homepage
            </Link>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ConfirmationPage;
