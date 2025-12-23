import { Navbar, Footer } from "@/components/shared";

const NewsEventsPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
            News & Events
          </h1>
          <div className="text-center text-gray-600">
            <p className="text-lg">
              This page is under construction. Please check back soon for more information.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NewsEventsPage;