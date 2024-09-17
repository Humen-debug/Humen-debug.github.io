<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { t } from '$lib/locales/i18n';
	import '../app.css';

	const currentYear = new Date().getFullYear();
	let toTopBtn: HTMLElement;

	const scrollToTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	const onScroll = () => {
		
		if (toTopBtn && window.screen.width > 480) {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				toTopBtn.style.bottom = '2rem';
			}else{
				toTopBtn.style.bottom = '-4rem';
			}
		}
	};
</script>

<svelte:window on:scroll={onScroll}/>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>{$t('footer.copyright', {year: currentYear})}</p>
		<p>{$t('footer.designed')}</p>
	</footer>

	<button bind:this={toTopBtn} class="float-btn" on:click={scrollToTop}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" fill="none">
			<path d="M7.5 3L15 11H0L7.5 3Z" />
		</svg>
	</button>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 0 10%;
		box-sizing: border-box;
	}

	@media (max-width: 720px) {
		main {
			padding: 1rem;
			margin: 0 auto;
		}
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer p {
		margin: auto;
	}

	footer {
		font-weight: bold;
	}

	.float-btn {
		display: none;
		position: fixed;
		bottom: -4rem;
		right: 2rem;
		width: 52px;
		height: 52px;

		background-color: var(--color-text);
		color: var(--color-bg-0);
		border: none;
		border-radius: 999px;

		padding: 1rem;
		transition: all var(--transition-duration) ease-in-out;
	}

	.float-btn svg path {
		fill: var(--color-bg-0);
	}

	.float-btn svg {
		width: 100%;
		height: 100%;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}

		.float-btn {
			display: block;
		}
	}
</style>
