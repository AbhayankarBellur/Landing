import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "@/components/user-walkthrough/HeroSection";
import StagesList from "@/components/user-walkthrough/StagesList";
import BackButton from "@/components/shared/BackButton";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

gsap.registerPlugin(ScrollTrigger);

const UserWalkthroughPage = () => {
  useEffect(() => {
    // Refresh ScrollTrigger on mount
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative bg-background font-body">
        <BackButton className="bg-secondary border-border hover:bg-muted text-foreground" />
        <HeroSection />
        <StagesList />
      </main>
      <Footer />
    </>
  );
};

export default UserWalkthroughPage;