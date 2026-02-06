// ========================================================================
// NAVBAR CONFIGURATION
// ========================================================================
// App-specific navbar configuration.
// Defines brand, navigation items, and active state logic.
// ========================================================================

import React from 'react';
import {
  SupportAgent as SupportIcon,
  Home as HomeIcon,
  Dashboard as DashboardIcon,
} from '@mui/icons-material';
import { createNavbar, NavigationItem } from '@rationalbloks/frontblok-components';
import { useClientAuth } from '../services/datablokApi';
import { navbarGradient } from '../theme';

// ========================================================================
// BRAND CONFIGURATION
// ========================================================================

const BRAND_CONFIG = {
  name: 'My App',
  logo: '/favicon.ico',
};

// ========================================================================
// NAVIGATION CONFIGURATION
// ========================================================================

// Navigation items for non-authenticated users
const PUBLIC_NAV_ITEMS: NavigationItem[] = [
  { id: '/', label: 'Home', icon: <HomeIcon /> },
];

// Additional navigation items for authenticated users
const AUTHENTICATED_NAV_ITEMS: NavigationItem[] = [
  { id: '/dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
  { id: '/support', label: 'Support', icon: <SupportIcon /> },
];

// ========================================================================
// CREATE THE NAVBAR
// ========================================================================

const Navbar = createNavbar({
  brand: BRAND_CONFIG,
  navigation: {
    public: PUBLIC_NAV_ITEMS,
    authenticated: AUTHENTICATED_NAV_ITEMS,
  },
  useAuth: useClientAuth,
  navbarGradient: navbarGradient,
  userRoleLabel: 'User',
  authRoute: '/auth',
  settingsRoute: '/settings',
});

export default Navbar;
