<script>
	import { onMount } from 'svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { t, locales } from '$lib/locales/i18n';
	import LocaleOptions from './LocaleOptions.svelte';

	let width = 0;
	let menuExpanded = false;

	const navs = [
		{ title: 'homepage.home', href: '#about' },
		{ title: 'homepage.projects', href: '#projects' },
		{ title: 'homepage.resume', href: '#resume' },
		{ title: 'homepage.contact', href: '#contact' }
	];

	const toggleMenu = () => {
		const content = document.getElementById('menu-content');
		if (!content) return;
		menuExpanded = !menuExpanded;
		
	};

	onMount(() => {
		const link = document.querySelectorAll('a');
		
		/**
		 * @param {MouseEvent} event
		 */
		function onLinkClicked(event) {
			if(menuExpanded) menuExpanded = false;
		}
		link.forEach((a) => a.addEventListener('click', onLinkClicked));

		return () => {
			link.forEach((a) => a.removeEventListener('click', onLinkClicked));
		};
	});

	$: isDesktop = width > 720;
</script>

<svelte:window bind:innerWidth={width} />

<header>
	{#if menuExpanded}
		<div class="backdrop-blur" on:click={toggleMenu} />
	{/if}
	<div id="topnav">
		<div class="corner">
			<a href="#about">
				<div class="square">
					<b>HC</b>
				</div>
			</a>
		</div>

		{#if isDesktop}
			<nav>
				<svg viewBox="0 0 2 3" aria-hidden="true">
					<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
				</svg>
				<ul>
					{#each navs as link}
						<li>
							<a href={link.href}>{$t(link.title)}</a>
						</li>
					{/each}
				</ul>
				<svg viewBox="0 0 2 3" aria-hidden="true">
					<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
				</svg>
			</nav>
		{:else}
			<div id="menu-content" class:hidden={!menuExpanded}>
				<ul class="column">
					{#each navs as link}
						<li>
							<a href={link.href}>{$t(link.title)}</a>
						</li>
					{/each}
				</ul>
				<div class="row">
					<div style="display: flex; flex: 1 0 auto;">
						<LocaleOptions />
					</div>
					<ThemeToggle />
				</div>
			</div>
		{/if}

		<div class="right">
			{#if isDesktop}
				<div class="row">
					<LocaleOptions />
					<div class="corner">
						<ThemeToggle />
					</div>
				</div>
			{:else}
				<div class="corner right">
					<button class="menu-btn" on:click={toggleMenu}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
							<path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" />
						</svg>
					</button>
				</div>
			{/if}
		</div>
	</div>
</header>

<style>
	header {
		position: fixed;
		width: 100vw;
		transition: all var(--transition-duration) linear;
		z-index: 999;
	}

	#topnav {
		position: relative;
		display: block;
		overflow: hidden;
		background-color: var(--color-bg-0);
	}

	.corner {
		width: var(--header-height);
		height: var(--header-height);
	}

	.right {
		position: absolute;
		right: 0;
		top: 0;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner .square {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background-color: var(--color-theme-1);
		color: var(--color-bg-0);
	}

	.corner .square b {
		font-size: 1.5rem;
		text-align: center;
		letter-spacing: normal;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: var(--color-bg-1);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color var(--transition-duration) linear;
	}

	header #menu-content {
		display: block;
		backdrop-filter: drop-shadow(var(--color-text) 0px 16rem 10px);
	}

	.hidden {
		display: none !important;
	}

	header #menu-content ul {
		display: block;
		position: relative;
		padding: 0;
		margin: 0;
		height: auto;
	}

	header #menu-content a {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 3rem;
		color: var(--color-text);
	}
	header #menu-content a:hover,
	a:hover {
		color: var(--color-theme-1);
	}

	.menu-btn {
		background-color: transparent;
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		border-radius: 999px;
	}

	.menu-btn:hover {
		background-color: color-mix(in hsl, var(--color-bg-1) 50%, transparent);
	}

	.menu-btn svg {
		width: 32px;
		height: 32px;
	}
	.menu-btn svg path {
		fill: var(--color-text);
	}

	.backdrop-blur {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 100vh;
		--backdrop-blur: blur(8px);

		backdrop-filter: var(--backdrop-blur);
	}
</style>
