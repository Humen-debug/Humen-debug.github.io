import { derived } from "svelte/store";
import translations from "./translations.json";
import { preferences, type Locale } from "$lib/stores/preferences";

export const locales: Locale[] = Object.keys(translations) as Locale[];

function translate(locale: string, key: string, vars: any = {}) {
  // Let's throw some errors if we're trying to use keys/locales that don't exist.
  // We could improve this by using Typescript and/or fallback values.
  if (!key) throw new Error("no key provided to $t()");
  if (!locale) throw new Error(`no translation for key "${key}"`);

  // Grab the translation from the translations object.
  let text = (translations as any)[locale][key];

    if (!text) {
        // Try replacing with en translations
        text = `${locale}.${key}`;
        console.warn(`no translation found for ${text}`);

        let replace = (translations as any)['en'][key];
        return replace || text;
    }

  // Replace any passed in variables in the translation string.
  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });

  return text;
}

export const t = derived(preferences , ({locale: $locale}) => (key: string, vars = {}) =>
  translate($locale, key, vars)
);
