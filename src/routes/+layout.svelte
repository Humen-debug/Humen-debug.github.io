<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	const currentYear = new Date().getFullYear();
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>&copy; {currentYear} Humen Chau. All rights reserved.</p>
		<p>Designed in Figma and built with Svelte</p>
	</footer>
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

	@media (max-width: 720px){
		main{
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

	footer p{
		margin: auto;
	}

	footer {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
