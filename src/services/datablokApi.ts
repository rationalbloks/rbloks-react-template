// ============================================================================
// API SERVICE
// ============================================================================
// The app's one connection to its rationalbloks API: the session (frontblok/auth) and the rows of
// every table (frontblok/crud).
//
// Setup:
// 1. Define your entity types below (matching your schema)
// 2. Add each table's name to ENTITIES
// 3. Read and write rows with getApi(): getAll, getOne, create, update, remove
// ============================================================================

import { createAuthApi, createAuthProvider, useAuth, generateOAuthNonce } from '@rationalbloks/frontblok/auth';
import { initApi, getApi } from '@rationalbloks/frontblok/crud';
import type { User } from '@rationalbloks/frontblok/auth';

// ============================================================================
// RE-EXPORTS
// ============================================================================

export { generateOAuthNonce, getApi };
export type { User };

// ============================================================================
// AUTH API SINGLETON
// ============================================================================
// VITE_DATABASE_API_URL is read here, in the app's own build, where Vite replaces it with the value the
// build was given (a library build would bake in an empty value). Unset, the app stops at start with a
// message naming it: createAuthApi refuses an empty URL.

export const authApi = createAuthApi(import.meta.env.VITE_DATABASE_API_URL);

// Every getApi() call goes through authApi's session
initApi(authApi);

// ============================================================================
// APP-SPECIFIC TYPES
// ============================================================================
// TypeScript interfaces for your tables, matching your schema.

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
// Your tables' names, in one place (a typo is then a type error).

export const ENTITIES = {
  TASKS: 'tasks',
  // Add more entities as needed:
  // PROJECTS: 'projects',
} as const;

// ============================================================================
// AUTH CONTEXT
// ============================================================================
// The React context of the session, made by frontblok/auth's factory.

export const ClientAuthProvider = createAuthProvider(authApi);
export const useClientAuth = useAuth;

// ============================================================================
// USAGE EXAMPLES
// ============================================================================
// List the tasks:
//   const tasks = await getApi().getAll<Task>(ENTITIES.TASKS);
//
// Read one task:
//   const task = await getApi().getOne<Task>(ENTITIES.TASKS, taskId);
//
// Create a task:
//   const newTask = await getApi().create<Task>(ENTITIES.TASKS, { title: 'New Task' });
//
// Update a task:
//   const updated = await getApi().update<Task>(ENTITIES.TASKS, taskId, { status: 'completed' });
//
// Delete a task:
//   await getApi().remove(ENTITIES.TASKS, taskId);
// ============================================================================
