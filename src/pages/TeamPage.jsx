import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importer les icônes
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
              src="/img_decentrep2.webp" // Updated with the new image
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
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://github.com/MacDuPain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-white hover:text-gray-400"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sacha-godel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-white hover:text-gray-400"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </li>
              <li>
                <strong>Thibault Lenormand</strong> - Dev
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://github.com/ThibaultL24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-white hover:text-gray-400"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thibault-lenormand-b38b96268/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-white hover:text-gray-400"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </li>
              <li>
                <strong>Maxime Lodato</strong> - Dev
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://github.com/maximelodato"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-white hover:text-gray-400"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/maxime-lodato-753a4a277/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-white hover:text-gray-400"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </li>
              <li>
                <strong>Alexandre Tedesco</strong> - Dev
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://github.com/AlexandreTedesco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-white hover:text-gray-400"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/alexandre-tedesco-85aa37298/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-white hover:text-gray-400"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </li>
              <li>
                <strong>Thomas Bobichon</strong> - Dev
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://github.com/ZealRa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-white hover:text-gray-400"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thomas-bobichon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-white hover:text-gray-400"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </li>
              <li>
                <strong>Zet</strong> - Mentor
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://www.linkedin.com/in/jeremie-olivier/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-white hover:text-gray-400"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </li>
            </ul>
            <p className="mt-6 text-lg">
              We&apos;re working on a revolutionary project around Intuition,
              using the RDF model to create an immutable information network on
              the blockchain. 🌐
            </p>
            <p className="mt-4 text-lg">
              <strong>Zet</strong>, teacher at{" "}
              <strong>The Hacking Project</strong>, is guiding us and sharing his
              deep knowledge on Web3 and decentralization concepts.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center items-center">
            <img
              src="/img_decentrep4.jpg" // Updated to use the new image
              alt="Team Representation"
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
