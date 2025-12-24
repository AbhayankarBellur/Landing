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
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-12">
            {/* Brand Section - Left Column Top */}
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <div className="flex items-center mb-2">
                <img
                  src={warmpawzLogo}
                  alt="Warmpawz"
                  className="h-16 w-auto"
                />
                <span className="text-xs font-semibold align-super ml-0.5">TM</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-0.5">
                Pet Care.
              </h3>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Reimagined.
              </h3>
              <p className="text-xs text-gray-600">
                Warmpawz, 2025
              </p>
            </div>

            {/* Policies Section - Right Column Top */}
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <h4 className="text-base font-semibold text-gray-900 mb-2 mt-[4.5rem] lg:mt-0">Policies</h4>
              <div className="space-y-1">
                <button 
                  onClick={() => handleNavigation("/about")}
                  className="block text-xs text-gray-600 hover:text-[#F5A855] transition-colors text-left"
                >
                  Privacy
                </button>
                <button 
                  onClick={() => handleNavigation("/about")}
                  className="block text-xs text-gray-600 hover:text-[#F5A855] transition-colors text-left"
                >
                  Security
                </button>
              </div>
            </div>

            {/* About Us Section - Left Column Bottom */}
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <button 
                onClick={() => handleNavigation("/about")}
                className="text-base font-semibold text-gray-900 hover:text-[#F5A855] transition-colors text-left block mb-4"
              >
                About Us
              </button>
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                {/* Instagram Icon */}
                <button 
                  aria-label="Instagram"
                  className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-gray-600 hover:text-[#F5A855] transition-colors"
                >
                  <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                  </svg>
                </button>
                
                {/* YouTube Icon */}
                <button 
                  aria-label="YouTube"
                  className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-gray-600 hover:text-[#F5A855] transition-colors"
                >
                  <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </button>
                
                {/* LinkedIn Icon */}
                <button 
                  onClick={() => window.open('https://www.linkedin.com/company/warmpawz/', '_blank')}
                  aria-label="LinkedIn"
                  className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-gray-600 hover:text-[#F5A855] transition-colors"
                >
                  <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Get the App Section - Right Column Bottom */}
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <h4 className="text-base font-semibold text-gray-900 mb-2">Get the app</h4>
              <div className="flex space-x-3">
                <button 
                  onClick={() => handleNavigation("/about")}
                  className="flex items-center space-x-1 text-xs text-gray-600 hover:text-[#F5A855] transition-colors text-left"
                >
                  <div className="w-4 h-4 bg-gray-800 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs">A</span>
                  </div>
                  <span>Android</span>
                </button>
                <button 
                  onClick={() => handleNavigation("/about")}
                  className="flex items-center space-x-1 text-xs text-gray-600 hover:text-[#F5A855] transition-colors text-left"
                >
                  <div className="w-4 h-4 bg-gray-800 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs">🍎</span>
                  </div>
                  <span>iOS</span>
                </button>
              </div>
            </div>

            {/* Contact Us Section - Full Width */}
            <div className="col-span-2 md:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-end mt-4 md:mt-0">
              <div className="w-full lg:w-auto flex flex-col items-center lg:items-end">
                <button
                  onClick={openModal}
                  className="bg-[#F5A855] text-white px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-[#E09642] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F5A855] focus:ring-offset-2 shadow-sm hover:shadow-md mb-3"
                >
                  Contact Us
                </button>
                <p className="text-sm text-gray-600 text-center lg:text-right leading-relaxed">
                  Have questions or need support? We're here to help you and your furry friends.
                </p>
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