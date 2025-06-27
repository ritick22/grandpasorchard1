import "./App.css";
import orchardBg from "./assets/orchard-bg.jpg"; // Background image
import logo from "./assets/logo.png"; // Logo
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import founder from './assets/founder.jpg';

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-4 sm:px-6"
      style={{ backgroundImage: `url(${orchardBg})` }}
    >
      <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl max-w-lg w-full">
        <img
          src={logo}
          alt="Grandpa's Orchard Logo"
          className="w-20 sm:w-24 mx-auto mb-4 rounded-full shadow"
        />

        <h1 className="text-3xl sm:text-4xl font-extrabold text-green-800 mb-3 tracking-tight">
          Grandpa’s Orchard
        </h1>

        <p className="text-base sm:text-lg text-green-700 mb-5 leading-relaxed">
          🌿 Naturally grown, lovingly harvested. <br />
          Our organic fruits are almost ready for you!
        </p>

        <div className="text-green-600 italic mb-6 text-sm sm:text-base">
          We're cultivating something beautiful — launching soon!
        </div>

        {/* Founder Section */}
        <div className="mt-6 flex flex-col items-center">
          <img
            src={founder}
            alt="Founder of Grandpa's Orchard"
            className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-green-800 shadow-lg mb-4"
          />
          <p className="text-green-900 italic max-w-sm text-sm sm:text-base text-center">
            “At Grandpa’s Orchard, our mission has always been simple: grow with love, share with care.
            Each fruit you’ll taste is a result of generations of passion and patience.”
            <br />
            <span className="font-semibold block mt-2">– The Founder, Anoop Kumar Bajpai</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex gap-6 justify-center text-green-800 text-xl">
          <a href="https://www.instagram.com/grandpasorchard1/?hl=en" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 hover:text-green-600" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;