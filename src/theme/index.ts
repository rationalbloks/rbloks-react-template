// ============================================================================
// THEME
// ============================================================================
// The app's MUI theme: frontblok's defaults (palette, typography, component overrides) with this
// app's overrides. App.tsx applies it; the navbar takes navbarGradient.
// ============================================================================

import { createAppTheme } from '@rationalbloks/frontblok/components';

export { defaultNavbarGradient as navbarGradient } from '@rationalbloks/frontblok/components';

// This app's overrides go here, e.g. createAppTheme({ paletteOverrides: { primary: { main: '#1e40af' } } })
export const theme = createAppTheme();
