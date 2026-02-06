// ============================================================================
// API SERVICE
// ============================================================================
// Authentication and CRUD operations.
//
// Setup:
// 1. Define your entity types below (matching your backend schema)
// 2. Add entity names to ENTITIES constant
// 3. Use getApi().list(), getApi().create(), etc. for CRUD operations
// ============================================================================

import { 
  createAuthApi, 
  createAuthProvider, 
  useAuth, 
  getStoredUser, 
  getStoredToken, 
  isAuthenticated,
  // OAuth nonce generator
  generateOAuthNonce
} from '@rationalbloks/frontblok-auth';
import { initApi, getApi } from '@rationalbloks/frontblok-crud';
import type { User } from '@rationalbloks/frontblok-auth';

// ============================================================================
// RE-EXPORTS
// ============================================================================
// Centralized imports for convenience

export { getStoredUser, getStoredToken, isAuthenticated };
export { generateOAuthNonce };
export type { User };
export { getApi };

// ============================================================================
// AUTH API SINGLETON
// ============================================================================
// Single instance for all authentication operations.
// Also used by frontblok-crud for authenticated API requests.

const API_URL = import.meta.env.VITE_DATABASE_API_URL || 'http://localhost:8000';

export const authApi = createAuthApi(API_URL);

// Initialize frontblok-crud with authApi for authenticated requests
initApi(authApi);

// ============================================================================
// APP-SPECIFIC TYPES
// ============================================================================
// Define TypeScript interfaces for your application entities.
// These should match your backend schema.

// Example entity - replace with your own
export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'pending' | 'in_progress' | 'completed';
  priority?: 'low' | 'medium' | 'high';
  due_date?: string;
  created_at: string;
  updated_at: string;
  user_id: string;
}

export interface CreateTaskInput {
  title: string;
  description?: string;
  status?: 'pending' | 'in_progress' | 'completed';
  priority?: 'low' | 'medium' | 'high';
  due_date?: string;
}

export type UpdateTaskInput = Partial<CreateTaskInput>;

// ============================================================================
// ENTITY NAMES
// ============================================================================
// Constants for frontblok-crud CRUD operations - avoids typos.
// Update these to match your backend entity names.

export const ENTITIES = {
  TASKS: 'tasks',
  // Add more entities as needed:
  // PROJECTS: 'projects',
  // USERS: 'users',
} as const;

// ============================================================================
// AUTH CONTEXT
// ============================================================================
// App-specific auth provider using frontblok-auth's factory.
// Creates React context for authentication state management.

export const ClientAuthProvider = createAuthProvider(authApi);
export const useClientAuth = useAuth;

// ============================================================================
// USAGE EXAMPLES
// ============================================================================
// 
// List all tasks:
//   const tasks = await getApi().list<Task>(ENTITIES.TASKS);
//
// Get a single task:
//   const task = await getApi().get<Task>(ENTITIES.TASKS, taskId);
//
// Create a task:
//   const newTask = await getApi().create<Task>(ENTITIES.TASKS, { title: 'New Task' });
//
// Update a task:
//   const updated = await getApi().update<Task>(ENTITIES.TASKS, taskId, { status: 'completed' });
//
// Delete a task:
//   await getApi().delete(ENTITIES.TASKS, taskId);
//
// ============================================================================
