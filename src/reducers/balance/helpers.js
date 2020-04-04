export const getBalance = (balanceState, localStorageKey) =>
	localStorage.getItem(localStorageKey) ? JSON.parse(localStorage.getItem(localStorageKey)) : balanceState;

export const setBalance = (balanceState, localStorageKey) =>
	localStorage.setItem(localStorageKey, JSON.stringify(balanceState));
