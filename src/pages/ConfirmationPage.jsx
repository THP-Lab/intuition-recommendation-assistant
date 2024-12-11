import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'; // Importation de Link pour gérer les routes

const ConfirmationPage = () => {
  const url = window.location.href; // URL de la page actuelle

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <header className="bg-[#2f2f2f] text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-6">Confirmation de la recommandation</h1>
          <p className="text-lg mb-8">Votre recommandation a été créée avec succès. Voici un résumé de la demande :</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-[#4f4f4f] text-gray-800 py-12">
        <div className="container mx-auto px-6">
          <section className="bg-[#3a3a3a] p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl text-white font-semibold mb-6">Résumé de la recommandation</h3>
            <p className="text-lg text-white mb-4">Votre recommandation a été générée avec succès. Vous pouvez partager cette page avec d&apos;autres personnes :</p>
            <p className="text-lg text-white mb-4">
              <strong>URL de la recommandation : </strong>{url}
            </p>

            <div className="text-center mt-6">
              <a
                href="https://graph.i7n.thp-lab.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-all"
              >
                Visualiser la recommandation dans le Graph
              </a>
            </div>
          </section>

          {/* Optional Next Steps Section */}
          <section className="text-center">
            <p className="text-lg text-white mb-4">
              Vous pouvez maintenant visualiser votre recommandation dans le graph ou la partager avec d&apos;autres personnes pour recueillir leurs avis.
            </p>
            <Link
              to="/" // Utilisation de Link pour rediriger vers la page d'accueil
              className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all"
            >
              Retour à la page d&apos;accueil
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
