<script lang="ts">
	import { locales, t } from "$lib/locales/i18n";
	import { preferences, type Locale } from "$lib/stores/preferences";

    function onSelect(locale: Locale){
        preferences.set({...$preferences, locale });
    }
</script>

<div>
    {#each  locales as locale}
        <button on:click={({}) => onSelect(locale)}>
            {$t(`locale.${locale}`)}
        </button>
    {/each}
</div>

<style>
    button {
        border: none;
        padding: 8px;
        height: var(--header-height);
        min-width: 4rem;
        background-color: transparent;
        color: var(--color-text)
    }

    button:hover{
        background-color: color-mix(in srgb, var(--color-bg-2) 50%, transparent);
    }

</style>