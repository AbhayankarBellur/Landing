import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES, COLORS } from "@/config/constants";

// Eager load HomePage (initial route)
import HomePage from "./app/home/page";

// Lazy load all other pages for code splitting
const UserWalkthroughPage = lazy(() => import("./app/user-walkthrough/page"));
const VendorOnboardingPage = lazy(() => import("./app/vendor-onboarding/page"));
const AboutUsPage = lazy(() => import("./app/about/page"));
const ServicesPage = lazy(() => import("./app/services/page"));
const BlogPage = lazy(() => import("./app/blog/page"));
const NewsEventsPage = lazy(() => import("./app/news-events/page"));
const CareersPage = lazy(() => import("./app/careers/page"));
const PoliciesPage = lazy(() => import("./app/policies/page"));
const NotFoundPage = lazy(() => import("./app/not-found/page"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
	<div className="min-h-screen flex items-center justify-center bg-white">
		<div className="text-center">
			<div 
				className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4"
				style={{ borderColor: `${COLORS.primary} transparent transparent transparent` }}
			></div>
			<p className="text-gray-600">Loading...</p>
		</div>
	</div>
);

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
			<div className="brand-gradient overflow-x-hidden">
				<Toaster />
				<Sonner />
				<BrowserRouter>
					<Suspense fallback={<PageLoader />}>
						<Routes>
							<Route path={ROUTES.home} element={<HomePage />} />
							<Route path={ROUTES.userWalkthrough} element={<UserWalkthroughPage />} />
							<Route path={ROUTES.vendorOnboarding} element={<VendorOnboardingPage />} />
							<Route path={ROUTES.about} element={<AboutUsPage />} />
							<Route path={ROUTES.services} element={<ServicesPage />} />
							<Route path={ROUTES.blog} element={<BlogPage />} />
							<Route path={ROUTES.newsEvents} element={<NewsEventsPage />} />
							<Route path={ROUTES.careers} element={<CareersPage />} />
							<Route path={ROUTES.policies} element={<PoliciesPage />} />
							{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
							<Route path={ROUTES.notFound} element={<NotFoundPage />} />
						</Routes>
					</Suspense>
				</BrowserRouter>
			</div>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
