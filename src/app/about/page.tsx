import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Footer } from "@/components/shared";
import { FoundersStory, Mission, Vision, Values, MeetTheTeam } from "@/components/about";

const AboutUsPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation with smooth scrolling
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Offset for sticky header (navbar height + padding)
        const offset = 140;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [location.hash]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <FoundersStory />
        <Mission />
        <Vision />
        <Values />
        <MeetTheTeam />
      </main>
      <Footer />
    </>
  );
};

export default AboutUsPage;