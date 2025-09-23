import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full shadow-lg backdrop-blur-md bg-white/80 border border-gray-300 
                     text-sky-600 hover:bg-white transition-all duration-300 animate-bounce-slow"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={20} />
        </button>
      )}

      <style jsx>{`
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        .animate-bounce-slow {
          animation: bounceSlow 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
