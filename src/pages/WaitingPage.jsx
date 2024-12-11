import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'; // Importation de Link pour gérer les routes

const WaitingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <header className="bg-[#2f2f2f] text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-6">En attente de confirmation</h1>
          <p className="text-lg mb-8">Votre requête est en cours de traitement. Voici un résumé de votre demande :</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-[#4f4f4f] text-gray-800 py-12">
        <div className="container mx-auto px-6">
          <section className="bg-[#3a3a3a] p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl text-white font-semibold mb-6">Résumé de la requête</h3>
            <p className="text-lg text-white mb-4">Votre demande est en cours de traitement. Nous vous informerons dès que possible.</p>

            <div className="text-center mt-6">
              <p className="text-lg text-white mb-4">Merci de patienter pendant que nous validons votre demande.</p>
              <Link
                to="/" // Utilisation de Link pour la navigation vers la page d'accueil
                className="bg-blue-400 text-white px-8 py-3 rounded-full hover:bg-blue-500 transition-all"
              >
                Retour à la page d&apos;accueil
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
