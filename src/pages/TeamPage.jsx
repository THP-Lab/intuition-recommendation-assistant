// src/pages/TeamPage.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <header className="bg-[#2f2f2f] text-white relative">
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-section max-w-lg text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-5xl font-extrabold mb-4">Meet our Team</h1>
            <p className="text-xl font-light mb-6">
              We are a team of devs in training at{" "}
              <strong>The Hacking Project</strong>. With the help of our mentor
              Zet, we are working on an innovative project around Web3 and
              decentralization.
            </p>
          </div>

          {/* Image Section */}
          <div className="image-section w-full md:w-1/2">
            <img
              src="/img_decentrep2.webp" // Remplacez par le chemin réel de l'image
              alt="DecentRep Team"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-[#4f4f4f] text-gray-100">
        {/* Team Section */}
        <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between">
          {/* Left: Names and Info */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-3xl font-semibold text-white mb-6">The Team</h3>
            <ul className="space-y-4">
              <li>
                <strong>Sacha Godel</strong> - Dev
              </li>
              <li>
                <strong>Thibault Lenormand</strong> - Dev
              </li>
              <li>
                <strong>Alexandre Tedesco</strong> - Dev
              </li>
              <li>
                <strong>Thomas Bobichon</strong> - Dev
              </li>
            </ul>
            <p className="mt-6 text-lg">
              We're working on a revolutionnary project around Intuition, using
              the RDF model to create an immutable information network on the
              blockchain. 🌐
            </p>
            <p className="mt-4 text-lg">
              <strong>Jérémie (Zet)</strong>, teacher at{" "}
              <strong>The Hacking Project</strong>, is guiding us et shares his
              deep knowledge on Web3 and decentralization concepts.
            </p>
          </div>

          {/* Right: Photos */}
          <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src="/img_placeholder1.webp" // Remplacez par le chemin réel de l'image
              alt="Sacha Godel"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img
              src="/img_placeholder2.webp" // Remplacez par le chemin réel de l'image
              alt="Thibault Lenormand"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img
              src="/img_placeholder3.webp" // Remplacez par le chemin réel de l'image
              alt="Alexandre Tedesco"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img
              src="/img_placeholder4.webp" // Remplacez par le chemin réel de l'image
              alt="Thomas Bobichon"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img
              src="/img_placeholder5.webp" // Remplacez par le chemin réel de l'image
              alt="Maxime Lodato"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TeamPage;
