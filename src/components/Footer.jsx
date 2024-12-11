// src/components/Footer.js
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2f2f2f] text-gray-400 py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 DecentRep. Open source and decentralized. All rights reserved.</p>

        {/* Liens dans le footer */}
        <div className="mt-4">
          <Link to="/create" className="text-white hover:text-blue-400 mx-4">Create</Link>
          <Link to="/request" className="text-white hover:text-blue-400 mx-4">Request</Link>
          <a href="https://graph.i7n.thp-lab.org/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 mx-4">
            Graph Visualization
          </a>
          <Link to="/team" className="text-white hover:text-blue-400 mx-4">Team</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
