/// <reference types="vite/client" />

// The build values the app reads: frontblok.config.json's vite_args
interface ImportMetaEnv {
  readonly VITE_DATABASE_API_URL: string;
  readonly VITE_GOOGLE_CLIENT_ID: string;
}
