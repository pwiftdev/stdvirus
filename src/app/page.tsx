'use client';

import { useState, useEffect, useRef } from 'react';
import MatrixRain from '@/components/MatrixRain';
import { TOKEN_CONFIG } from '@/lib/config';
import { 
  FaVirus, 
  FaExclamationTriangle, 
  FaShieldAlt, 
  FaThermometerHalf, 
  FaSkull,
  FaBiohazard,
  FaRadiation,
  FaPlay,
  FaPause,
  FaVolumeUp
} from 'react-icons/fa';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Removed ASCII art - will use image instead

  const welcomeText = "Try not to get infected, degen...";
  const descriptionText = "A memecoin that spreads like wildfire upon those who don't take care...";

  const handleEnterSite = () => {
    setShowLoader(false);
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    setIsLoaded(true);
    
    // Typewriter effect for welcome text
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < welcomeText.length) {
        setTypedText(welcomeText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  // Prevent scrolling when loader is shown
  useEffect(() => {
    if (showLoader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showLoader]);

  const copyContractAddress = () => {
    navigator.clipboard.writeText('GBvFrsz8d2T7GgkhpqmXKo8ctL5TUcuMvX76GV8ipump');
    // You could add a toast notification here
  };

  return (
    <div className={`min-h-screen relative ${showLoader ? 'overflow-hidden' : 'overflow-auto'}`}>
      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src="/virussound.mp3" type="audio/mpeg" />
      </audio>

      {/* Full Screen Loader */}
      {showLoader && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center relative overflow-hidden" style={{height: '100vh', width: '100vw'}}>
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Floating virus icons */}
            <div className="absolute top-1/4 left-1/4 animate-bounce">
              <FaVirus className="w-16 h-16 text-cyan-400 opacity-30" />
            </div>
            <div className="absolute top-1/3 right-1/4 animate-pulse">
              <FaVirus className="w-12 h-12 text-cyan-400 opacity-40" />
            </div>
            <div className="absolute bottom-1/4 left-1/3 animate-spin">
              <FaVirus className="w-20 h-20 text-cyan-400 opacity-25" />
            </div>
            <div className="absolute bottom-1/3 right-1/3 animate-bounce">
              <FaVirus className="w-14 h-14 text-cyan-400 opacity-35" />
            </div>
            
            {/* Biohazard symbols */}
            <div className="absolute top-10 left-10 animate-pulse">
              <FaBiohazard className="w-8 h-8 text-red-400 opacity-50" />
            </div>
            <div className="absolute top-20 right-20 animate-bounce">
              <FaBiohazard className="w-6 h-6 text-red-400 opacity-60" />
            </div>
            <div className="absolute bottom-20 left-20 animate-spin">
              <FaBiohazard className="w-10 h-10 text-red-400 opacity-45" />
            </div>
            <div className="absolute bottom-10 right-10 animate-pulse">
              <FaBiohazard className="w-7 h-7 text-red-400 opacity-55" />
            </div>

            {/* Warning triangles */}
            <div className="absolute top-1/2 left-10 animate-pulse">
              <FaExclamationTriangle className="w-6 h-6 text-yellow-400 opacity-40" />
            </div>
            <div className="absolute top-1/2 right-10 animate-bounce">
              <FaExclamationTriangle className="w-5 h-5 text-yellow-400 opacity-50" />
            </div>
          </div>

          <div className="text-center relative z-10">
            {/* STD Logo */}
            <div className="mb-12 flex justify-center">
              <div className="relative">
                <div className="w-40 h-40 md:w-60 md:h-60 rounded-full border-4 border-cyan-400 border-opacity-50 overflow-hidden bg-black shadow-2xl glow">
                  <img 
                    src="/stdtickerimage2.png" 
                    alt="$STD Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 md:w-12 md:h-12">
                  <FaVirus className="w-full h-full text-cyan-400 animate-pulse" />
                </div>
              </div>
            </div>

            <button
              onClick={handleEnterSite}
              className="px-8 py-4 bg-cyan-900 bg-opacity-50 border-2 border-cyan-500 rounded-lg hover-glow transition-all duration-300 hover:bg-opacity-70 flex items-center justify-center mx-auto"
            >
              <FaVirus className="w-6 h-6 mr-3 text-cyan-400" />
              <span className="text-xl font-semibold">ENTER SITE</span>
            </button>
          </div>
        </div>
      )}

      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 border-b border-cyan-500 border-opacity-30">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="glow text-2xl font-bold flex items-center">
              <FaVirus className="w-6 h-6 mr-2 animate-pulse text-cyan-400" />
              $STD
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="hover-glow transition-all duration-300 flex items-center">
                <FaVirus className="w-4 h-4 mr-1 text-cyan-400" />
                ABOUT
              </a>
              <a href="#token" className="hover-glow transition-all duration-300 flex items-center">
                <FaVirus className="w-4 h-4 mr-1 text-cyan-400" />
                TOKEN
              </a>
              <a href="#warning" className="hover-glow transition-all duration-300 flex items-center">
                <FaVirus className="w-4 h-4 mr-1 text-cyan-400" />
                WARNING
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-6xl mx-auto text-center">
            {/* Circular Logo */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-cyan-400 border-opacity-50 overflow-hidden bg-black shadow-2xl glow">
                  <img 
                    src="/stdtickerimage2.png" 
                    alt="$STD Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 md:w-12 md:h-12">
                  <FaVirus className="w-full h-full text-cyan-400 animate-pulse" />
                </div>
              </div>
            </div>

                  {/* Main Title */}
                  <div className="mb-6">
                    <h1 className="text-4xl md:text-6xl font-bold glow text-cyan-400 mb-4">
                      Solana Transmitted Degeneracy
                    </h1>
                  </div>

                  {/* Welcome Text with Typewriter Effect */}
                  <div className="mb-6">
                    <h2 className="text-3xl md:text-5xl font-bold glow terminal-cursor">
                      {typedText}
                      {showCursor && <span className="text-cyan-400">_</span>}
                    </h2>
                  </div>

            {/* Description */}
            <div className="mb-12 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-cyan-300 leading-relaxed">
                {descriptionText}
              </p>
            </div>

            {/* Emergency Text */}
            <div className="mb-12 max-w-4xl mx-auto">
              <div className="bg-black bg-opacity-60 p-6 rounded-lg border-2 border-cyan-400 border-opacity-50">
                <p className="text-lg md:text-xl text-cyan-200 leading-relaxed text-center">
                  <span className="text-red-400 font-bold">In case of emergency,</span> our deployer will prescribe you <span className="text-cyan-300 font-bold">2 SOL worth of $STD.</span>
                </p>
                <div className="flex justify-center mt-4">
                  <FaVirus className="w-6 h-6 text-cyan-400 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Immersive Story Sections */}
            <div className="w-full">
              {/* Section 1: The Origin */}
              <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10 max-w-4xl mx-auto px-6">
                  <h2 className="text-6xl md:text-8xl font-bold text-red-400 glitch mb-8">
                    THE ORIGIN
                  </h2>
                        <p className="text-2xl md:text-3xl text-red-200 leading-relaxed">
                          In the depths of Solana&apos;s blockchain, a new strain emerged...
                        </p>
                  <div className="mt-8 flex justify-center">
                    <FaBiohazard className="w-16 h-16 text-red-400 animate-spin" />
                  </div>
                </div>
              </section>

              {/* Section 2: The Spread */}
              <section id="token" className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10 max-w-4xl mx-auto px-6">
                  <h2 className="text-6xl md:text-8xl font-bold text-cyan-400 glitch mb-8">
                    THE SPREAD
                  </h2>
                  <p className="text-2xl md:text-3xl text-cyan-200 leading-relaxed mb-8">
                    <span className="text-cyan-300 font-bold">$STD</span> began infecting wallets across the network...
                  </p>
                  <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-cyan-400">
                      <FaVirus className="w-8 h-8 text-cyan-400 mx-auto mb-4 animate-pulse" />
                      <h3 className="text-xl font-bold text-cyan-300 mb-2">Patient Zero</h3>
                      <p className="text-cyan-200">The first wallet to catch STD</p>
                    </div>
                    <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-cyan-400">
                      <FaVirus className="w-8 h-8 text-cyan-400 mx-auto mb-4 animate-bounce" />
                      <h3 className="text-xl font-bold text-cyan-300 mb-2">Viral Spread</h3>
                      <p className="text-cyan-200">Spreading like wildfire</p>
                    </div>
                    <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-cyan-400">
                      <FaVirus className="w-8 h-8 text-cyan-400 mx-auto mb-4 animate-spin" />
                      <h3 className="text-xl font-bold text-cyan-300 mb-2">Global Pandemic</h3>
                      <p className="text-cyan-200">No wallet is safe</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: The Symptoms */}
              <section id="warning" className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10 max-w-4xl mx-auto px-6">
                  <h2 className="text-6xl md:text-8xl font-bold text-purple-400 glitch mb-8">
                    THE SYMPTOMS
                  </h2>
                  <p className="text-2xl md:text-3xl text-purple-200 leading-relaxed mb-12">
                    Warning signs that you might be infected...
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-black bg-opacity-60 p-8 rounded-lg border border-purple-400">
                      <h3 className="text-3xl font-bold text-purple-300 mb-6 flex items-center justify-center">
                        <FaThermometerHalf className="w-8 h-8 mr-3 animate-pulse" />
                        Early Stage
                      </h3>
                      <ul className="space-y-3 text-purple-200 text-lg">
                        <li className="flex items-center">
                          <FaVirus className="w-4 h-4 mr-3 text-purple-400" />
                          Uncontrollable urge to buy the dip
                        </li>
                        <li className="flex items-center">
                          <FaVirus className="w-4 h-4 mr-3 text-purple-400" />
                          FOMO spreading through portfolio
                        </li>
                        <li className="flex items-center">
                          <FaVirus className="w-4 h-4 mr-3 text-purple-400" />
                          Checking charts every 5 minutes
                        </li>
                      </ul>
                    </div>
                    <div className="bg-black bg-opacity-60 p-8 rounded-lg border border-red-400">
                      <h3 className="text-3xl font-bold text-red-300 mb-6 flex items-center justify-center">
                        <FaBiohazard className="w-8 h-8 mr-3 animate-spin" />
                        Advanced Stage
                      </h3>
                      <ul className="space-y-3 text-red-200 text-lg">
                        <li className="flex items-center">
                          <FaVirus className="w-4 h-4 mr-3 text-red-400" />
                          Selling kidneys for more tokens
                        </li>
                        <li className="flex items-center">
                          <FaVirus className="w-4 h-4 mr-3 text-red-400" />
                          Dreams about green candles
                        </li>
                        <li className="flex items-center">
                          <FaVirus className="w-4 h-4 mr-3 text-red-400" />
                          Go see a pharmacist immediately!
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: The Protection */}
              <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10 max-w-6xl mx-auto px-6">
                  <h2 className="text-6xl md:text-8xl font-bold text-green-400 glitch mb-8">
                    THE PROTECTION
                  </h2>
                  <p className="text-2xl md:text-3xl text-green-200 leading-relaxed mb-12">
                    How to protect yourself from the STD...
                  </p>
                  
                  {/* Prescription Image */}
                  <div className="mb-12 flex justify-center">
                    <div className="relative">
                      <img 
                        src="/prescribe std.png" 
                        alt="STD Prescription" 
                        className="max-w-md w-full h-auto rounded-lg border-2 border-green-400 shadow-2xl"
                      />
                      <div className="absolute -top-4 -right-4">
                        <FaVirus className="w-8 h-8 text-red-400 animate-bounce" />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-black bg-opacity-60 p-8 rounded-lg border border-green-400">
                      <FaShieldAlt className="w-12 h-12 text-green-400 mx-auto mb-6 animate-bounce" />
                      <h3 className="text-2xl font-bold text-green-300 mb-4">Use a Bundler</h3>
                      <p className="text-green-200 text-lg">Your first line of defense against STD</p>
                    </div>
                    <div className="bg-black bg-opacity-60 p-8 rounded-lg border border-green-400">
                      <FaShieldAlt className="w-12 h-12 text-green-400 mx-auto mb-6 animate-pulse" />
                      <h3 className="text-2xl font-bold text-green-300 mb-4">Never Trade Naked</h3>
                      <p className="text-green-200 text-lg">Always use protection when trading</p>
                    </div>
                    <div className="bg-black bg-opacity-60 p-8 rounded-lg border border-green-400">
                      <FaShieldAlt className="w-12 h-12 text-green-400 mx-auto mb-6 animate-spin" />
                      <h3 className="text-2xl font-bold text-green-300 mb-4">See a Pharmacist</h3>
                      <p className="text-green-200 text-lg">If you feel the itch to buy the dip</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: The Final Warning */}
              <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10 max-w-4xl mx-auto px-6">
                  <h2 className="text-6xl md:text-8xl font-bold text-red-400 glitch mb-8">
                    FINAL WARNING
                  </h2>
                  <p className="text-2xl md:text-3xl text-red-200 leading-relaxed mb-8">
                    This memecoin is designed to <span className="text-red-300 font-bold">SPREAD LIKE WILDFIRE</span>
                  </p>
                        <p className="text-xl md:text-2xl text-red-300 mb-12">
                          It&apos;s a mock of sexually transmitted diseases, but the financial consequences are very real.
                        </p>
                  <div className="flex justify-center space-x-4">
                    <FaExclamationTriangle className="w-12 h-12 text-yellow-400 animate-pulse" />
                    <FaBiohazard className="w-12 h-12 text-red-400 animate-spin" />
                    <FaExclamationTriangle className="w-12 h-12 text-yellow-400 animate-pulse" />
                  </div>
                  <p className="text-lg text-red-400 mt-8 font-bold">
                    TRADE AT YOUR OWN RISK
                  </p>
                </div>
              </section>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-cyan-900 bg-opacity-50 border-2 border-cyan-500 rounded-lg hover-glow transition-all duration-300 hover:bg-opacity-70 flex items-center justify-center">
                <FaVirus className="w-5 h-5 mr-2 text-cyan-400" />
                <span className="text-lg font-semibold">BUY $STD</span>
              </button>
              <button className="px-8 py-4 bg-purple-900 bg-opacity-50 border-2 border-purple-500 rounded-lg hover-glow transition-all duration-300 hover:bg-opacity-70 flex items-center justify-center">
                <FaVirus className="w-5 h-5 mr-2 text-purple-400" />
                <span className="text-lg font-semibold">VIEW CHART</span>
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 border-t border-cyan-500 border-opacity-30">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-cyan-400 text-sm flex items-center justify-center">
              <FaVirus className="w-4 h-4 mr-2 animate-bounce text-cyan-400" />
              © 2024 $STD - Solana Transmitted Degeneracy. Use protection.
              <FaVirus className="w-4 h-4 ml-2 animate-bounce text-cyan-400" />
            </p>
          </div>
        </footer>
      </div>

            {/* Audio Player - Bottom Left */}
            {!showLoader && (
              <div className="fixed bottom-4 left-4 z-50">
                <div className="bg-black bg-opacity-80 p-3 rounded-lg border border-cyan-400 border-opacity-50 flex items-center space-x-3">
                  <button
                    onClick={toggleAudio}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {isPlaying ? <FaPause className="w-5 h-5" /> : <FaPlay className="w-5 h-5" />}
                  </button>
                  <FaVolumeUp className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-300 text-sm font-mono">
                    {isPlaying ? 'VIRUS SOUND' : 'MUTED'}
                  </span>
                </div>
              </div>
            )}

            {/* Contract Address Copy Button - Center Bottom */}
            {!showLoader && (
              <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
                <button
                  onClick={copyContractAddress}
                  className="bg-black bg-opacity-80 px-6 py-3 rounded-lg border-2 border-cyan-400 border-opacity-50 hover:border-opacity-100 hover-glow transition-all duration-300 flex items-center space-x-3 group"
                >
                  <FaVirus className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  <span className="text-cyan-300 text-sm font-mono group-hover:text-cyan-200 transition-colors">
                    CA: GBvFrsz8d2T7GgkhpqmXKo8ctL5TUcuMvX76GV8ipump
                  </span>
                  <svg 
                    className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            )}

            {/* X (Twitter) Button - Bottom Right */}
            {!showLoader && (
              <div className="fixed bottom-4 right-4 z-50">
                <a
                  href="https://x.com/i/communities/1981411644161868254/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black bg-opacity-80 p-4 rounded-full border-2 border-cyan-400 border-opacity-50 hover:border-opacity-100 hover-glow transition-all duration-300 flex items-center justify-center group"
                >
                  <svg 
                    className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            )}
    </div>
  );
}
