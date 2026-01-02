import { MainLayout, PageLayout } from "@/layouts";
import { 
  HeroSection, 
  JobsList, 
  FooterMessage 
} from "@/components/careers";

const CareersPage = () => {
  return (
    <MainLayout>
      <PageLayout gradient="warm">
        <HeroSection />
        <JobsList />
        <FooterMessage />
      </PageLayout>
    </MainLayout>
  );
};

export default CareersPage;
