import { Navbar, Footer } from "@/components/shared";
import { 
  HeroSection, 
  JobsList, 
  FooterMessage 
} from "@/components/careers";

const CareersPage = () => {
  return (
    <>
      <Navbar />
      <main 
        className="min-h-screen relative"
        style={{
          background: "linear-gradient(180deg, #FFD4A8 0%, #FFCA99 42%, #FFE8D6 100%)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          transition: "background 0.3s ease-in-out",
        }}
      >
        <div className="pt-32">
          <HeroSection />
          <JobsList />
          <FooterMessage />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CareersPage;
