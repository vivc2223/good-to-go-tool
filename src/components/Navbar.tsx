import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleShowDropdown = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setShowCompanyDropdown(true);
  };

  const handleHideDropdown = () => {
    const timeout = setTimeout(() => {
      setShowCompanyDropdown(false);
    }, 150);
    setDropdownTimeout(timeout);
  };

  const handleOtherNavHover = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setShowCompanyDropdown(false);
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Show navbar if scrolling up or at top of page
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide navbar if scrolling down and past threshold
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setShowCompanyDropdown(false); // Close dropdown when hiding navbar
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed ${
        location.pathname === "/" ? "top-9 " : "top-0"
      } left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800 transition-transform duration-300 ease-in-out ${
        isVisible
          ? "translate-y-0"
          : location.pathname === "/"
          ? "-translate-y-[calc(100%+2rem)]"
          : "-translate-y-full"
      }`}
    >
      <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="px-3 py-1 rounded-md">
              <img
                src="/lovable-uploads/dyna_logo_white_transparent.png"
                alt="DYNA"
                className="md:h-6 h-5 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="px-3 py-2 text-sm font-medium transition-colors duration-200"
                style={{
                  color: isActive("/") ? "#ffffff" : "#cccccc",
                }}
                onMouseEnter={handleOtherNavHover}
              >
                Home
              </Link>
              <Link
                to="/research"
                className="px-3 py-2 text-sm font-medium transition-colors duration-200"
                style={{
                  color: isActive("/research") ? "#ffffff" : "#cccccc",
                }}
                onMouseEnter={handleOtherNavHover}
              >
                Research
              </Link>
              <div
                className="relative"
                onMouseEnter={handleShowDropdown}
                onMouseLeave={handleHideDropdown}
              >
                <span
                  className="px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
                  style={{
                    color: "#cccccc",
                  }}
                >
                  Company
                </span>
              </div>
              <Link
                to="/careers"
                className="px-3 py-2 text-sm font-medium transition-colors duration-200"
                style={{
                  color: isActive("/careers") ? "#ffffff" : "#cccccc",
                }}
                onMouseEnter={handleOtherNavHover}
              >
                Careers
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Company Dropdown Overlay */}
      {showCompanyDropdown && (
        <div
          className="fixed top-16 left-0 right-0 h-screen z-40 animate-in fade-in slide-in-from-top-2 duration-300"
          style={{
            background: "#1a2e2e",
          }}
          onMouseEnter={handleShowDropdown}
          onMouseLeave={handleHideDropdown}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg, rgba(0,0,0,0.95), rgba(0,0,0,0.98))
              `,
              backgroundSize:
                "300% 300%, 280% 280%, 320% 320%, 260% 260%, 250% 250%, 290% 290%, 270% 270%, 310% 310%, 100% 100%",
              animation: "subtleTealShift 8s ease-in-out infinite",
            }}
          />
          <style>{`
            @keyframes subtleTealShift {
              0% { 
                background-position: 0% 0%, 100% 100%, 50% 50%, 80% 20%, 0% 0%;
                filter: brightness(0.85) saturate(1.1);
              }
              16.67% { 
                background-position: 20% 30%, 80% 70%, 70% 30%, 60% 40%, 0% 0%;
                filter: brightness(0.92) saturate(1.15);
              }
              33.33% { 
                background-position: 40% 60%, 60% 40%, 80% 20%, 40% 60%, 0% 0%;
                filter: brightness(1.05) saturate(1.2);
              }
              50% { 
                background-position: 60% 80%, 40% 60%, 30% 70%, 20% 80%, 0% 0%;
                filter: brightness(0.78) saturate(1.08);
              }
              66.67% { 
                background-position: 80% 60%, 20% 80%, 60% 40%, 70% 30%, 0% 0%;
                filter: brightness(0.95) saturate(1.18);
              }
              83.33% { 
                background-position: 60% 40%, 70% 30%, 90% 10%, 90% 10%, 0% 0%;
                filter: brightness(1.08) saturate(1.25);
              }
              100% { 
                background-position: 0% 0%, 100% 100%, 50% 50%, 80% 20%, 0% 0%;
                filter: brightness(0.85) saturate(1.1);
              }
            }

            .dropdown-link {
              position: relative;
              display: inline-block;
            }

            .dropdown-link::after {
              content: '';
              position: absolute;
              bottom: -6px;
              left: 0;
              width: 100%;
              height: 2px;
              background-color: white;
              transform: scaleX(0);
              transform-origin: left;
              transition: transform 300ms ease-in-out;
            }

            .dropdown-link:hover::after {
              transform: scaleX(1);
            }
          `}</style>
          <div className="relative z-10 h-screen flex items-start pt-12">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <div className="grid grid-cols-2 gap-32 items-start">
                {/* Left side - Description text positioned higher */}
                <div className="pt-8">
                  <p
                    className="text-white/90 text-base leading-relaxed max-w-xs"
                    style={{
                      fontSize: "clamp(16px, 5vw, 20px)",
                    }}
                  >
                    Learn more about DYNA's mission, our team and open roles.
                  </p>
                </div>

                {/* Right side - Large navigation links closer together */}
                <div className="flex flex-col items-start space-y-4 pt-16">
                  <Link
                    to="/blog"
                    className="dropdown-link text-white text-6xl font-light hover:text-white/80 transition-colors duration-300 leading-tight"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Stories
                  </Link>
                  <Link
                    to="/mission"
                    className="dropdown-link text-white text-6xl font-light hover:text-white/80 transition-colors duration-300 leading-tight"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Mission
                  </Link>
                  <Link
                    to="/culture"
                    className="dropdown-link text-white text-6xl font-light hover:text-white/80 transition-colors duration-300 leading-tight"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Culture
                  </Link>
                  <Link
                    to="/careers"
                    className="dropdown-link text-white text-6xl font-light hover:text-white/80 transition-colors duration-300 leading-tight"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Careers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                isActive("/")
                  ? "text-white bg-gray-800"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/research"
              className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                isActive("/research")
                  ? "text-white bg-gray-800"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Research
            </Link>
            <div className="space-y-1">
              <span className="block px-3 py-2 text-base font-medium text-gray-300">
                Company
              </span>
              <Link
                to="/blog"
                className="block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Stories
              </Link>
              <Link
                to="/mission"
                className="block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Mission
              </Link>
              <Link
                to="/culture"
                className="block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Culture
              </Link>
              <Link
                to="/careers"
                className="block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
