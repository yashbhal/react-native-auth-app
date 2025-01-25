import { describe, it, expect } from 'vitest';
import { useAuthStore } from '../store/auth.store';

describe('Auth Store', () => {
  it('should initialize with default values', () => {
    const state = useAuthStore.getState();
    expect(state.isAuthenticated).toBe(false);
    expect(state.user).toBeNull();
  });
});
