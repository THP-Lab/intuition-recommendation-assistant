// src/components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-[#2f2f2f] text-gray-400 py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 DecentRep. Open source and decentralized. All rights reserved.</p>

        {/* Liens dans le footer */}
        <div className="mt-4">
          <a href="#create" className="text-white hover:text-blue-400 mx-4">Create</a>
          <a href="#request" className="text-white hover:text-blue-400 mx-4">Request</a>
          <a href="#graph-visualization" className="text-white hover:text-blue-400 mx-4">Graph Visualization</a>
          <a href="#team" className="text-white hover:text-blue-400 mx-4">Team</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
