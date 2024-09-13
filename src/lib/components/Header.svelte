<script>
	import ThemeToggle from "./ThemeToggle.svelte";
</script>

<header>
	<div class="corner">
		<a href="#about">
			<div class="square">
				<b>HC</b>
			</div>
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li>
				<a href="#about">Home</a>
			</li>
			<li>
				<a href="#projects">Projects</a>
			</li>
			<li>
				<a href="#resume">Resume</a>
			</li>
			<li>
				<a href="#contact">Contact</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<ThemeToggle>
			Toggle
		</ThemeToggle>
	</div>
</header>

<style>
	header {
		position: fixed;
		display: flex;
		justify-content: space-between;
		width: 100vw;
	}

	.corner {
		width: 48px;
		height: 48px;
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

	a:hover {
		color: var(--color-theme-1);
	}
</style>
