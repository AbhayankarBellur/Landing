import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import warmpawzLogo from "@/assets/warmpawz logo (1).svg";

const Footer = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    userType: '',
    query: ''
  });

  const handleNavigation = (path: string) => {
    // Mark that user has navigated within the session
    sessionStorage.setItem('hasNavigated', 'true');
    navigate(path);
  };

  const handleFooterNavigation = (section: string) => {
    // Mark that user has navigated within the session
    sessionStorage.setItem('hasNavigated', 'true');
    navigate(`/about#${section}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    closeModal();
  };

  const openModal = () => {
    setIsModalVisible(true);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
    
    // GSAP animation for opening
    if (modalRef.current && backdropRef.current && modalContentRef.current) {
      // Set initial states
      gsap.set(backdropRef.current, { opacity: 0 });
      gsap.set(modalContentRef.current, { 
        scale: 0.7, 
        opacity: 0,
        y: 50
      });
      
      // Create timeline for smooth coordinated animation
      const tl = gsap.timeline();
      
      tl.to(backdropRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      })
      .to(modalContentRef.current, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "back.out(1.7)"
      }, "-=0.1"); // Start slightly before backdrop finishes
    }
  };

  const closeModal = () => {
    if (modalRef.current && backdropRef.current && modalContentRef.current) {
      // GSAP animation for closing
      const tl = gsap.timeline({
        onComplete: () => {
          setIsModalOpen(false);
          setIsModalVisible(false);
          document.body.style.overflow = '';
        }
      });
      
      tl.to(modalContentRef.current, {
        scale: 0.8,
        opacity: 0,
        y: -30,
        duration: 0.25,
        ease: "power2.in"
      })
      .to(backdropRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in"
      }, "-=0.1"); // Start slightly before content finishes
    } else {
      // Fallback if refs aren't available
      setIsModalOpen(false);
      setIsModalVisible(false);
      document.body.style.overflow = '';
    }
  };

  // Handle body scroll when modal opens/closes
  useEffect(() => {
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  return (
    <>
      {/* Thin orange separator line between body and footer */}
      <div className="w-full h-px bg-[#F5A855]" />
      
      <footer className="bg-white pt-8 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-3">
                <img
                  src={warmpawzLogo}
                  alt="Warmpawz"
                  className="h-16 w-auto"
                />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-0.5">
                Pet Care.
              </h3>
              <h3 className="text-base font-bold text-gray-900 mb-3">
                Reimagined.
              </h3>
              <p className="text-sm text-gray-600">
                Warmpawz, 2025
              </p>
            </div>

            {/* About Us Section */}
            <div className="lg:col-span-1">
              <h4 className="text-base font-semibold text-gray-900 mb-3">About Us</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => handleFooterNavigation("story")}
                  className="block text-sm text-gray-600 hover:text-[#F5A855] transition-colors text-left"
                >
                  Founder's Story
                </button>
                <button 
                  onClick={() => handleFooterNavigation("mission")}
                  className="block text-sm text-gray-600 hover:text-[#F5A855] transition-colors text-left"
                >
                  Mission
                </button>
                <button 
                  onClick={() => handleFooterNavigation("vision")}
                  className="block text-sm text-gray-600 hover:text-[#F5A855] transition-colors text-left"
                >
                  Vision
                </button>
                <button 
                  onClick={() => handleFooterNavigation("values")}
                  className="block text-sm text-gray-600 hover:text-[#F5A855] transition-colors text-left"
                >
                  Values
                </button>
                <button 
                  onClick={() => handleFooterNavigation("team")}
                  className="block text-sm text-gray-600 hover:text-[#F5A855] transition-colors text-left"
                >
                  Meet the Team
                </button>
              </div>
            </div>

            {/* Policies Section */}
            <div className="lg:col-span-1">
              <h4 className="text-base font-semibold text-gray-900 mb-3">Policies</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => handleNavigation("/about")}
                  className="block text-sm text-gray-600 hover:text-[#F5A855] transition-colors text-left"
                >
                  Privacy
                </button>
                <button 
                  onClick={() => handleNavigation("/about")}
                  className="block text-sm text-gray-600 hover:text-[#F5A855] transition-colors text-left"
                >
                  Security
                </button>
              </div>
            </div>

            {/* Get the App Section */}
            <div className="lg:col-span-1">
              <h4 className="text-base font-semibold text-gray-900 mb-3">Get the app</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => handleNavigation("/about")}
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#F5A855] transition-colors text-left"
                >
                  <div className="w-4 h-4 bg-gray-800 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs">A</span>
                  </div>
                  <span>Android</span>
                </button>
                <button 
                  onClick={() => handleNavigation("/about")}
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#F5A855] transition-colors text-left"
                >
                  <div className="w-4 h-4 bg-gray-800 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs">🍎</span>
                  </div>
                  <span>macOS</span>
                </button>
              </div>
            </div>

            {/* Contact Us Section */}
            <div className="lg:col-span-1 flex flex-col items-start lg:items-end">
              <div className="w-full lg:w-auto flex flex-col items-end ">
                <h4 className="text-base font-semibold text-gray-900 mb-3 lg:text-right">Contact Us</h4>
                <p className="text-sm text-gray-600 mb-4 lg:text-right leading-relaxed">
                  Have questions or need support? We're here to help you and your furry friends.
                </p>
                <button
                  onClick={openModal}
                  className="w-full lg:w-auto bg-[#F5A855] text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-[#E09642] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F5A855] focus:ring-offset-2 shadow-sm hover:shadow-md"
                  style={{ minHeight: '48px' }}
                >
                  Show contact form
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Us Modal */}
      {isModalVisible && (
        <div ref={modalRef} className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div 
            ref={backdropRef}
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div 
              ref={modalContentRef}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Contact Us</h2>
                <button
                  onClick={closeModal}
                  className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F5A855] focus:ring-offset-1"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Have questions or need support? We're here to help you and your furry friends.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="modalFullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="modalFullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Ex: Sparky Singh"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A855] focus:border-transparent transition-colors"
                      style={{ minHeight: '48px' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="modalEmail" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="modalEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Sparky@gmail.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A855] focus:border-transparent transition-colors"
                      style={{ minHeight: '48px' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="modalPhone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="modalPhone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 9876 54321"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A855] focus:border-transparent transition-colors"
                      style={{ minHeight: '48px' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="modalUserType" className="block text-sm font-medium text-gray-700 mb-2">
                      Choose User
                    </label>
                    <select
                      id="modalUserType"
                      name="userType"
                      value={formData.userType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F5A855] focus:border-transparent transition-colors"
                      style={{ minHeight: '48px' }}
                    >
                      <option value="">Select user type</option>
                      <option value="pet-parent">Pet Parent</option>
                      <option value="service-provider">Service Provider</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="modalQuery" className="block text-sm font-medium text-gray-700 mb-2">
                      Query?
                    </label>
                    <textarea
                      id="modalQuery"
                      name="query"
                      value={formData.query}
                      onChange={handleInputChange}
                      placeholder="Type your query"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A855] focus:border-transparent resize-none transition-colors"
                      style={{ minHeight: '80px' }}
                    />
                  </div>

                  {/* Modal Footer */}
                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1"
                      style={{ minHeight: '48px' }}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-[#F5A855] text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-[#E09642] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F5A855] focus:ring-offset-1"
                      style={{ minHeight: '48px' }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edge-to-Edge Legal Bar */}
      <div className="w-full bg-[#F5A855] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm text-white">
              © 2025 Warmpawz All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button 
                onClick={() => handleNavigation("/about")}
                className="text-sm text-white hover:text-gray-200 transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => handleNavigation("/about")}
                className="text-sm text-white hover:text-gray-200 transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleNavigation("/about")}
                className="text-sm text-white hover:text-gray-200 transition-colors"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;