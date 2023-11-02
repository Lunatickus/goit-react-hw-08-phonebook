import { createSelector } from '@reduxjs/toolkit';

const selectAuthStore = state => state.auth;

export const selectIsLoggedIn = createSelector(
  selectAuthStore,
  authStore => authStore.isLoggedIn
);

export const selectUser = createSelector(
    selectAuthStore,
    authStore => authStore.user
  );

export const selectIsRefreshing = createSelector(
    selectAuthStore,
    authStore => authStore.isRefreshing
  );
