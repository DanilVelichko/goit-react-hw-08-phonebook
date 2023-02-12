export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectIsAuthenticated = state => state.auth.access_token;
export const selectAuthError = state => state.auth.error;
export const selectIsAuthLoading = state => state.auth.isLoading;

export const selectProfile = state => state.auth.profile;
export const selectName = state => state.auth.profile.name;
export const selectEmail = state => state.auth.profile.email;
