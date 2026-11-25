# RBloks React Template

A clean, production-ready React template with authentication and CRUD operations built-in, for a rationalbloks API.

## 🚀 Features

- **React 19** - Latest React with modern hooks
- **Vite 7** - Lightning fast build tool
- **TypeScript** - Type-safe development
- **MUI v7** - Beautiful Material Design components
- **Authentication Ready** - Login, register, Google OAuth, password reset, email verification
- **CRUD Operations** - Ready-to-use API client for your tables
- **Beautiful Theme** - Professional warm beige design with customizable theme
- **Responsive Navbar** - Configurable navigation with auth state handling

## 📦 Tech Stack

| Package | Purpose |
|---------|---------|
| `@rationalbloks/frontblok/auth` | Authentication (login, register, OAuth, tokens) |
| `@rationalbloks/frontblok/crud` | CRUD operations (`getAll`, `getOne`, `create`, `update`, `remove`) and their React hooks |
| `@rationalbloks/frontblok/components` | Reusable UI (AuthView, ErrorBoundary, SupportView, the Navbar factory, the theme) |
| `@tanstack/react-query` | Server state management |
| `@mui/material` | UI components |
| `react-router-dom` | Routing |

## 🏁 Quick Start

```bash
# Clone the template
git clone https://github.com/rationalbloks/rbloks-react-template.git my-app
cd my-app

# Install the locked dependency tree
npm ci

# Copy the environment file, then set VITE_DATABASE_API_URL to your API's URL
cp .env.example .env

# Start the development server
npm run dev
```

## 📁 Project Structure

```
src/
├── App.tsx                    # Providers and routes
├── main.tsx                   # Entry point
├── vite-env.d.ts              # The build variables the app reads
├── components/
│   └── views/                 # Application-specific views
│       ├── DashboardView.tsx
│       └── HomeView.tsx
├── config/
│   ├── branding.ts            # App branding
│   └── Navbar.tsx             # Navbar configuration
├── services/
│   └── datablokApi.ts         # API service (auth + CRUD)
├── styles/
│   └── globals.css            # The page box (colors and fonts come from the theme)
└── theme/
    └── index.ts               # MUI theme
```

The settings, support and authentication pages are frontblok's views, configured in `App.tsx`.

## ⚙️ Configuration

### 1. Environment Variables

Edit `.env` with your API's URL (the project page shows it, as does the MCP tool `get_project_info`):

```env
VITE_DATABASE_API_URL=https://your-api.example.com
VITE_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
```

### 2. Customize Navbar

Edit `src/config/Navbar.tsx`:

```tsx
const BRAND_CONFIG = {
  name: 'Your App Name',
  logo: '/your-logo.png',
};

const PUBLIC_NAV_ITEMS: NavigationItem[] = [
  { id: '/', label: 'Home', icon: <HomeIcon /> },
];

const AUTHENTICATED_NAV_ITEMS: NavigationItem[] = [
  { id: '/dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
];
```

### 3. Define Your Entities

Edit `src/services/datablokApi.ts`:

```tsx
// Define your entity types
export interface Product {
  id: string;
  name: string;
  price: number;
  created_at: string;
  updated_at: string;
  user_id: string;
}

// Add entity names
export const ENTITIES = {
  PRODUCTS: 'products',
  ORDERS: 'orders',
} as const;
```

### 4. Use CRUD Operations

```tsx
import { getApi, ENTITIES, Product } from '../services/datablokApi';

// List the products
const products = await getApi().getAll<Product>(ENTITIES.PRODUCTS);

// Create a product
const newProduct = await getApi().create<Product>(ENTITIES.PRODUCTS, {
  name: 'Widget',
  price: 29.99,
});

// Update a product
await getApi().update<Product>(ENTITIES.PRODUCTS, productId, {
  price: 24.99,
});

// Delete a product
await getApi().remove(ENTITIES.PRODUCTS, productId);
```

In a component, `useEntityList`, `useEntity` and `useMutation` from `@rationalbloks/frontblok/crud` do the same with
loading and error state.

## 🎨 Theming

The theme is frontblok's defaults with your overrides, in `src/theme/index.ts`:

```tsx
export const theme = createAppTheme({
  paletteOverrides: {
    primary: { main: '#1e40af' }, // Your brand color
  },
});
```

## 🚢 Deployment

Deploy it as a **module** of your rationalbloks project. Push your copy to GitHub, then add it to the project as a
stateless FrontBlok module from its repository: in the app, from the project in **My Projects**, or with the MCP tool
`deploy_module` (`module_type: "frontblok"`). rationalbloks builds it on your project's resource pool from
`frontblok.config.json` and the committed `package-lock.json` (the build installs with `npm ci`), and serves it on
its own HTTPS host under your pool's domain.

Set the module's variables there: `VITE_DATABASE_API_URL` is required (your API's URL), and every name in
`vite_args` reaches the build. Names starting with `DEPLOY_` are reserved for the deployment. A new commit ships with
a redeploy of the module.

## 📝 License

MIT License - feel free to use this template for any project.

## 🙏 Credits

Built with [@rationalbloks/frontblok](https://www.npmjs.com/package/@rationalbloks/frontblok).
