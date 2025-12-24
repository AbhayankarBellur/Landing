import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./app/home/page";
import UserWalkthroughPage from "./app/user-walkthrough/page";
import VendorOnboardingPage from "./app/vendor-onboarding/page";
import AboutUsPage from "./app/about/page";
import ServicesPage from "./app/services/page";
import BlogPage from "./app/blog/page";
import NewsEventsPage from "./app/news-events/page";
import NotFoundPage from "./app/not-found/page";

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
			<div className="brand-gradient">
				<Toaster />
				<Sonner />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/user-walkthrough" element={<UserWalkthroughPage />} />
						<Route
							path="/vendor-onboarding"
							element={<VendorOnboardingPage />}
						/>
						<Route path="/about" element={<AboutUsPage />} />
						<Route path="/services" element={<ServicesPage />} />
						<Route path="/blog" element={<BlogPage />} />
						<Route path="/news-events" element={<NewsEventsPage />} />
						{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</BrowserRouter>
			</div>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
