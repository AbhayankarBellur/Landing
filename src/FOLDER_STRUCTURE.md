# Folder Structure Documentation

## Overview
This project follows a modular architecture with clear separation between pages and components, making it easy to maintain and scale.

## Structure

```
src/
├── app/                           # All pages (lightweight)
│   ├── home/
│   │   └── page.tsx              # Home page - imports from components/home
│   ├── user-walkthrough/
│   │   └── page.tsx              # User walkthrough - imports from components/user-walkthrough
│   ├── vendor-onboarding/
│   │   └── page.tsx              # Vendor onboarding - imports from components/vendor-onboarding
│   ├── about/
│   │   └── page.tsx              # About Us page - living sections with scroll-driven animations
│   ├── services/
│   │   └── page.tsx              # Services page - separate from user-walkthrough
│   ├── blog/
│   │   └── page.tsx              # Blog page - separate from vendor-onboarding
│   ├── news-events/
│   │   └── page.tsx              # News & Events page
│   └── not-found/
│       └── page.tsx              # 404 page
├── components/                    # Page-specific and shared components
│   ├── index.ts                  # Main component exports (all folders)
│   ├── home/
│   │   ├── index.ts              # Exports: LoadingScreen, MainContent
│   │   ├── LoadingScreen.tsx     # Video loading screen component
│   │   └── MainContent.tsx       # Main landing page content
│   ├── user-walkthrough/
│   │   ├── index.ts              # Exports: HeroSection, StagesList
│   │   ├── HeroSection.tsx       # Hero section for user walkthrough
│   │   └── StagesList.tsx        # List of pet journey stages
│   ├── vendor-onboarding/
│   │   ├── index.ts              # Exports: HeaderSection, OnboardingSteps
│   │   ├── HeaderSection.tsx     # Header for vendor onboarding
│   │   └── OnboardingSteps.tsx   # Onboarding steps list
│   ├── about/
│   │   ├── index.ts              # Exports: FoundersStory, Mission, Vision, Values, MeetTheTeam
│   │   ├── FoundersStory.tsx     # Narrative timeline with story beats
│   │   ├── Mission.tsx           # Statement card with scale-in animation
│   │   ├── Vision.tsx            # Future panel with horizontal fade-in
│   │   ├── Values.tsx            # Interactive grid with hover effects
│   │   └── MeetTheTeam.tsx       # Expanding circular cards
│   ├── shared/
│   │   ├── index.ts              # Exports: BackButton, Navbar, Footer, CurvedArrow, OnboardingStep
│   │   ├── BackButton.tsx        # Shared back button component
│   │   ├── Navbar.tsx            # Shared navigation bar component
│   │   ├── Footer.tsx            # Shared footer component with modal
│   │   ├── CurvedArrow.tsx       # Curved arrow component for navigation
│   │   └── OnboardingStep.tsx    # Reusable onboarding step component
│   ├── user/
│   │   ├── index.ts              # Exports: PhoneMockup, StageSection
│   │   ├── PhoneMockup.tsx       # Phone mockup component with animations
│   │   └── StageSection.tsx      # Individual stage section component
│   ├── utils/
│   │   ├── index.ts              # Exports: MultiVideoBackground, NavLink, PhoneFrame, ScrollIndicator, ScrollySection, VideoBackground
│   │   ├── MultiVideoBackground.tsx  # Multi-video background utility
│   │   ├── NavLink.tsx           # Custom navigation link component
│   │   ├── PhoneFrame.tsx        # Phone frame utility component
│   │   ├── ScrollIndicator.tsx   # Scroll indicator utility
│   │   ├── ScrollySection.tsx    # Scrollytelling section utility
│   │   └── VideoBackground.tsx   # Video background utility
│   └── ui/                       # shadcn/ui components (unchanged)
├── assets/                       # Static assets
├── hooks/                        # Custom React hooks
├── lib/                          # Utility libraries
└── App.tsx                       # Main app with routing
```

## Import Patterns

### Main Component Index
```typescript
// src/components/index.ts - Exports all component folders
export * from './about';
export * from './home';
export * from './shared';
export * from './user';
export * from './user-walkthrough';
export * from './vendor-onboarding';
export * from './utils';
```

### Page Components (Lightweight)
```typescript
// src/app/home/page.tsx
import { LoadingScreen, MainContent } from "@/components/home";
import { Navbar, Footer } from "@/components/shared";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <LoadingScreen onComplete={handleComplete} />
      <MainContent isVisible={showContent} />
      <Footer />
    </main>
  );
};
```

### Component Index Files
```typescript
// src/components/home/index.ts
export { default as LoadingScreen } from './LoadingScreen';
export { default as MainContent } from './MainContent';

// src/components/shared/index.ts
export { default as BackButton } from './BackButton';
export { default as Navbar } from './Navbar';
export { default as Footer } from './Footer';
export { default as CurvedArrow } from './CurvedArrow';
export { default as OnboardingStep } from './OnboardingStep';
```

### Flexible Import Options
```typescript
// Option 1: Import from specific folder
import { LoadingScreen, MainContent } from "@/components/home";
import { Navbar, Footer } from "@/components/shared";

// Option 2: Import from main components index
import { LoadingScreen, MainContent, Navbar, Footer } from "@/components";

// Option 3: Import utilities
import { PhoneFrame, VideoBackground } from "@/components/utils";
```

#### Footer Component
- **Maximum density**: Flexbox layout eliminates column height equalization
- **Content-driven height**: Each section sizes to its own content, no forced stretching
- **Visual separator**: Thin orange line between body content and footer
- **Edge-to-edge legal bar**: Orange bottom bar touches all viewport edges
- **Comprehensive sections**: Brand, About Us, Policies, Get the App, Contact Form
- **Ultra-compact form**: Reduced padding and spacing while maintaining 44px+ touch targets
- **Optimized link density**: 2-column mobile layout, tighter vertical spacing
- **Eliminated whitespace**: Reduced all margins, padding, and gaps to minimum viable
- **Responsive design**: Wraps naturally based on content, not forced grid heights
- **Brand consistency**: Uses Warmpawz logo and brand colors
- **App download links**: Android and macOS download options
- **Legal compliance**: Terms, Privacy Policy, and Cookies links
- **Normal document flow**: Footer content in normal flow, legal bar edge-to-edge
- **Touch-friendly**: 44px+ touch targets maintained on all interactive elements
- **Form accessibility**: Proper labels, placeholders, and focus states preserved
- **50% height reduction**: Eliminated excess vertical space while retaining all content

### Navigation Features

#### Navbar Component
- **Floating design**: Rounded navbar with 3D shadow effect, positioned with margins from screen edges
- **Content masking**: Fixed backdrop div prevents scrolled content from showing above navbar
- **Logo integration**: Uses Warmpawz logo from assets on the left (only location)
- **Center navigation**: SERVICES, BLOG, NEWS & EVENTS (AskWarmi excluded as requested)
- **Clean layout**: No additional icons, focus on navigation items
- **Active state**: Highlights current page with orange accent color
- **Responsive design**: Mobile-friendly with interactive hamburger menu
- **Fixed overlay drawer**: Always-rendered drawer that slides from right using GPU-safe transforms
- **Backdrop overlay**: Semi-transparent backdrop with proper opacity transitions
- **Body scroll lock**: Prevents background scrolling when drawer is open
- **Accessibility**: Proper ARIA attributes and keyboard navigation support
- **Performance optimized**: Uses transform and opacity only, no layout-affecting animations
- **Session tracking**: Maintains navigation state for loading animation
- **3D Effect**: Shadow and border styling to match reference design

#### Content Spacing
All pages include proper padding (`pt-32`) to prevent content overlap with the floating navbar positioned with top margins.

## Special Features

### Routing Structure
- **Home page**: Main landing with Pet Parent/Service Provider buttons
- **User Walkthrough**: Pet parent journey (separate from Services navbar link)
- **Vendor Onboarding**: Service provider onboarding (separate from Blog navbar link)
- **About Us**: Living sections page with scroll-driven animations and anchor navigation
  - **Sections**: Founder's Story (#story), Mission (#mission), Vision (#vision), Values (#values), Meet the Team (#team)
  - **Footer routing**: All footer links route to /about with section anchors
- **Services**: Dedicated page for navbar Services link
- **Blog**: Dedicated page for navbar Blog link  
- **News & Events**: Dedicated page for navbar News & Events link

### Navigation Logic
- **Navbar links**: Services, Blog, News & Events route to their respective dedicated pages
- **Footer links**: 
  - About Us section links route to /about#section (story, mission, vision, values, team)
  - Other links (Policies, Get the App, Legal) route to /about
- **Landing page buttons**: Pet Parent → User Walkthrough, Service Provider → Vendor Onboarding
- **Smooth scrolling**: Native smooth scroll with header offset for anchor navigation

### About Us Page Features
- **Living Components**: Each section animates once on scroll into view
- **Performance Optimized**: Uses Intersection Observer API for scroll detection
- **Motion System**: Lightweight animations (opacity, transform ≤16px, scale ≤1.03)
- **Timing**: 240-360ms duration with cubic-bezier(0.4, 0, 0.2, 1) easing
- **Accessibility**: Respects prefers-reduced-motion, keyboard navigation support
- **Responsive**: Mobile-first design with proper stacking and spacing

### Loading Animation Logic
The home page loading animation (video) only plays on:
- Fresh page loads (browser refresh)
- New browser sessions
- Direct URL access

The animation is **skipped** when:
- Navigating back from other pages using the back button
- Navigating back via React Router navigation

This is implemented using `sessionStorage` to track navigation state within the browser session.

## Benefits

1. **Clean Separation**: Pages are lightweight and focus on layout/state management
2. **Easy Imports**: Single import statement per page gets all needed components
3. **Modular**: Each page's components are grouped together
4. **Scalable**: Easy to add new pages and their specific components
5. **Maintainable**: Clear structure makes it easy to find and modify components

## Migration Notes

- Old `src/pages/` directory has been removed
- All page logic moved to `src/app/[page]/page.tsx`
- Components split into page-specific folders with index.ts exports
- Shared components moved to `src/components/shared/`
- All imports updated to use the new structure