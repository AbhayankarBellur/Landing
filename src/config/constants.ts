// Design System Constants

// Colors
export const COLORS = {
  primary: '#F5A855',
  primaryHover: '#E09642',
  white: '#FFFFFF',
  black: '#000000',
  textMuted: 'rgba(0, 0, 0, 0.8)',
  border: '#F5A855',
} as const;

// Gradient Backgrounds
export const GRADIENTS = {
  warm: 'linear-gradient(180deg, #F69052 0%, #FAD3B5 60%, #FFF2E6 100%)',
  brandTinted: 'linear-gradient(180deg, #FFF1E6 0%, #FFF8D6 45%, #FFFFFF 100%)',
  white: '#FFFFFF',
} as const;

// Breakpoints (in pixels)
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
} as const;

// Animation Durations (in milliseconds)
export const ANIMATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
  loadingDissolution: 300,
  fadeIn: 700,
  scrollDebounce: 16, // ~60fps
} as const;

// Layout Constants
export const LAYOUT = {
  navbarHeight: 'pt-32',
  navbarTop: 'top-4',
  navbarZIndex: 'z-40',
  footerZIndex: 'z-10',
} as const;

// Routes
export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  blog: '/blog',
  blogArticle: '/blog/:articleId',
  newsEvents: '/news-events',
  careers: '/careers',
  policies: '/policies',
  userWalkthrough: '/user-walkthrough',
  vendorOnboarding: '/vendor-onboarding',
  notFound: '*',
} as const;

// Video URLs
export const VIDEOS = {
  user: {
    adoption: '/videos/adoption-v2.mp4',
    veterinary: '/videos/petsVET_1.mp4',
    training: '/videos/pet-training.mp4',
    boarding: '/videos/pet-boarding-new.mp4',
    products: '/videos/pawsome-mart.mp4',
    sunset: '/videos/pet-sunset.mp4',
  },
  vendor: {
    step1: '/videos/step1.mov',
    step2: '/videos/step2.mov',
    step3: '/videos/step3.mov',
    step4: '/videos/step4.mov',
    step5: '/videos/step5.mov',
    step6: '/videos/step6.mov',
    step7: '/videos/step7.mov',
  },
  loading: {
    desktop: '/src/assets/loading.mov',
    mobile: '/videos/loading phone.mov',
  },
} as const;

// Scroll Thresholds
export const SCROLL = {
  navbarShowThreshold: 50,
  navbarHideThreshold: 100,
} as const;

// Session Storage Keys
export const STORAGE_KEYS = {
  hasShownLoading: 'hasShownLoading',
} as const;
