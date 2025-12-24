import { Navbar, Footer } from "@/components/shared";
import { ServicesPhoneFrame } from "@/components/services";

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            Our Services
          </h1>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Explore our comprehensive pet care services
          </p>
          <ServicesPhoneFrame />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;