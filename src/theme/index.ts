// ========================================================================
// THEME CONFIGURATION
// ========================================================================
// MUI theme with professional colors and styling.
// Customize this for your application's unique aesthetics.
//
// Features:
// - Beautiful warm beige background
// - Professional blue primary color palette
// - Consistent typography with system fonts
// - Polished component styling
// ========================================================================

import { createTheme, ThemeOptions } from '@mui/material/styles';

// ========================================================================
// COLOR PALETTE
// ========================================================================

export const palette = {
  primary: {
    main: '#1e40af',
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    900: '#1e3a8a',
  },
  secondary: {
    main: '#6b7280',
  },
  success: {
    main: '#10b981',
  },
  warning: {
    main: '#f59e0b',
  },
  error: {
    main: '#ef4444',
  },
  background: {
    default: 'hsl(33.3, 60%, 97.1%)', // Beautiful warm beige
    paper: '#FCFAF7', // Warm white for cards
  },
};

// ========================================================================
// TYPOGRAPHY
// ========================================================================

export const typography = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", "Helvetica Neue", sans-serif',
  h1: {
    fontWeight: 700,
    letterSpacing: '-0.5px',
  },
  h2: {
    fontWeight: 700,
    letterSpacing: '-0.4px',
  },
  h3: {
    fontWeight: 600,
    letterSpacing: '-0.3px',
  },
  h4: {
    fontWeight: 700,
    letterSpacing: '-0.2px',
  },
  h5: {
    fontWeight: 600,
    letterSpacing: '-0.1px',
  },
  h6: {
    fontWeight: 600,
    letterSpacing: '-0.08px',
  },
};

// ========================================================================
// COMPONENT OVERRIDES
// ========================================================================

export const components: ThemeOptions['components'] = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: '8px',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        border: '1px solid #f3f4f6',
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontWeight: 600,
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      select: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", "Helvetica Neue", sans-serif',
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiInputBase-input': {
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", "Helvetica Neue", sans-serif',
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", "Helvetica Neue", sans-serif',
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", "Helvetica Neue", sans-serif',
      },
    },
  },
};

// ========================================================================
// NAVBAR GRADIENT CONFIGURATION
// ========================================================================

export const navbarGradient = {
  start: '#1800ad',
  end: '#0d0067',
};

// ========================================================================
// THEME FACTORY FUNCTION
// ========================================================================

export interface AppThemeOptions {
  paletteOverrides?: Partial<typeof palette>;
  typographyOverrides?: Partial<typeof typography>;
  componentsOverrides?: ThemeOptions['components'];
  borderRadius?: number;
}

export function createAppTheme(options: AppThemeOptions = {}) {
  const {
    paletteOverrides = {},
    typographyOverrides = {},
    componentsOverrides = {},
    borderRadius = 12,
  } = options;

  return createTheme({
    palette: {
      ...palette,
      ...paletteOverrides,
    },
    typography: {
      ...typography,
      ...typographyOverrides,
    },
    shape: {
      borderRadius,
    },
    components: {
      ...components,
      ...componentsOverrides,
    },
  });
}

// ========================================================================
// DEFAULT THEME EXPORT
// ========================================================================

export const theme = createAppTheme();

export default theme;
