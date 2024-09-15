<script lang="ts">
	export let images: string[] = [];

	let width: number;
	let index = 0;

	let carousel: HTMLElement;

	const onPrevious = () => {
		index = Math.abs((index - 1) % images.length);
		carousel?.scrollTo(index * width, 0);
	};

	const onNext = () => {
		index = (index + 1) % images.length;
		carousel?.scrollTo(index * width, 0);
	};
</script>

{#if images.length}
	<div class="column">
		<div class="carousel" bind:clientWidth={width}>
			<div class="carousel_viewport">
				<ol bind:this={carousel} class="slides">
					{#each images as image, i}
						<li id="slide-{i}">
							<img src={image} alt="image-{i}" />
						</li>
					{/each}
				</ol>
			</div>
			<button style="left: 0px;" on:click={onPrevious}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z" fill="black" />
				</svg>
			</button>
			<button style="right: 0px;" on:click={onNext}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z" fill="black" />
				</svg>
			</button>
		</div>

		<div class="row" style="gap: 4px">
			{#each images as image, i}
				<div class="indicator" aria-selected={i === index} />
			{/each}
		</div>
	</div>
{/if}

<style>
	.carousel {
		width: 100%;
		padding-top: 72.25%;
		position: relative;
		overflow: hidden;
	}

	.carousel > button {
		position: absolute;
		top: 50%;
		border-radius: 999px;
	}

	.carousel_viewport {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		text-align: center;
		overflow: hidden;
	}

	.slides {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.slides::-webkit-scrollbar {
		display: none;
	}

	.slides > li {
		scroll-snap-align: center;
		flex-shrink: 0;
		width: 100%;
		height: 100%;

		margin: 0 25px;
		transform-origin: center center;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.slides img {
		height: 90%;
        border-radius: 1rem;
		object-fit: contain;
	}

	.indicator {
		height: 8px;
		width: 8px;
		border-radius: 12px;
		--color: var(--color-bg-1);
		background-color: var(--color);
		transition: all var(--transition-duration) linear;
	}

	.indicator[aria-selected='true'] {
		width: 2rem;
		--color: var(--color-bg-2);
	}
</style>
