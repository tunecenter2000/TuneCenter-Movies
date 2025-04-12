import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Film } from 'lucide-react';
import Button from '../shared/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Film className="h-8 w-8 text-[#E50914] mr-2" />
          <span className="text-xl font-bold text-white">Tune Center</span>
        </Link>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="primary" size="sm">
            Subscribe Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;