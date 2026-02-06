// ============================================================================
// BRANDING CONFIGURATION
// ============================================================================
// Minimal configuration for app branding.
// Used by general components to display app-specific content.
//
// Single source of truth for branding, used everywhere.
// 
// CUSTOMIZE THIS FILE for your application.
// ============================================================================

export const BRANDING = {
  // App name displayed in auth pages, navbar, etc.
  appName: 'My App',
  
  // Short tagline for auth page
  tagline: 'Welcome',
  
  // Logo letter (for the icon box)
  logoLetter: 'M',
  
  // Primary gradient for buttons and logo
  primaryGradient: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)',
  primaryGradientHover: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
  
  // Shadow color for logo
  logoShadow: '0 4px 20px rgba(30, 64, 175, 0.3)',
  
  // Post-login redirect
  dashboardRoute: '/dashboard',
  
  // Success messages
  messages: {
    loginSuccess: 'Login successful! Welcome back.',
    registerSuccess: 'Account created successfully!',
    googleNewUser: 'Welcome! Your account has been created successfully.',
  },
  
  // Security badge text
  securityBadge: 'Secure Access',
} as const;

export type Branding = typeof BRANDING;
