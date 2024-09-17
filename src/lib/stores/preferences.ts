import { browser } from '$app/environment';
import {  get, writable } from 'svelte/store';

export type Theme = 'dark' | 'light';
export type Locale = 'zh' | 'en';

const _settingsKey = 'preferences';

export interface Preference {
	theme: Theme;
	locale: Locale;
}

let defaultPreferences: Preference = {
	theme: 'light',
	locale: 'en'
};

export const preferences = _preferences();

function _preferences() {
	
	if (!browser || 'localStorage' in self === false) return writable<Preference>(defaultPreferences);

	const stored =
		localStorage.getItem(_settingsKey) &&
		(JSON.parse(localStorage.getItem(_settingsKey)!) as Preference);

	if (stored) defaultPreferences = stored;
	setTheme(defaultPreferences.theme);

	const store = writable<Preference>(defaultPreferences);
    const { subscribe, update, set } = store;
    

	function save(preferences: Preference) {
		setTheme(preferences.theme);
		localStorage.setItem(_settingsKey, JSON.stringify(defaultPreferences));
	}

	function change<T extends keyof Preference = keyof Preference>(
		category: T,
		value: Preference[T]
	) {
        defaultPreferences[category] = value;
        category === 'theme' && setTheme(value as Theme);
		update((old) => ({ [category]: value, ...old }));
		save(defaultPreferences);
	}

	return {
		subscribe,
        change,
		value() {
			return get(store);
		},
		set: (preferences: Preference) => {
			defaultPreferences = preferences;
			save(preferences);
			set(preferences);
		}
	};
}

function setTheme(theme: Theme) {
	if (!browser) return;
	const root = window.document.body;
	const current = root.classList.item(0);
	if (current) root.classList.replace(current, theme);
	else {
		root.classList.add(theme);
	}
}
