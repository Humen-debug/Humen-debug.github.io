<script>
	import github from '$lib/images/github.svg';
	import Tag from '$lib/components/Tag.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';

	const techs = [
		{ name: 'Flutter', type: 'front-end' },
		{ name: 'ReactNative', type: 'front-end' },
		{ name: 'React', type: 'front-end' },
		{ name: 'Vue', type: 'front-end' },
		{ name: 'MongoDB', type: 'back-end' },
		{ name: 'MySQL', type: 'back-end' },
		{ name: 'InfluxDB', type: 'back-end' },
		{ name: 'GraphQL', type: 'back-end' },
		{ name: 'Nodejs', type: 'back-end' },
		{ name: 'FeathersJs', type: 'back-end' },
		{ name: 'Fireabase', type: 'back-end' }
	];

	const projects = [
		{
			title: 'AR Archaeology',
			description:
				'A ReactNative AR app and FYP in collaboration with Ararat Plain Southeast Archaeological Project',
			github: 'ar-archaeology-app',
			techs: ['ReactNaive', 'Expo', 'Three.js'],
			images: ['/FYP_info.png', '/FYP_sites.png']
		},
		{
			title: 'AR Archaeology Backend',
			description:
				'The backend and an admin panel for the `AR Archaeology` to enable simplified content management, real-time updates to site information and features',
			github: 'ar-archaeology-server',
			techs: ['React', 'Next.js', 'FeathersJs', 'MongoDB', 'GridFS'],
			images: ['/add.gif', '/sort_filter.gif', '/media.gif', 'header_customize.gif']
		},
		{
			title: 'Sleep Tracker',
			description:
				'A health-care app that provides sleep pattern plans, tracks sleep cycle and generates time-series charts for monitoring progress and efficacy',
			github: 'sleep-tracker',
			techs: ['Flutter', 'GraphQL'],
			images: [
				'enter_bedtime.gif',
				'/wakeup.gif',
				'/sleep_cycle.gif',
				'/plan.gif',
				'/sleep_statistic.gif',
				'/sleep_diary.gif'
			]
		}
	];
</script>

<svelte:head>
	<title>Humen Chau | Software Developer</title>
	<meta name="description" content="Humen Chau" />
</svelte:head>

<section>
	<div id="about" class="section center-content">
		<h1>Humen Chau</h1>
		<h2>Software Developer | Full-stack Developer</h2>
		<div class="row" style="gap: 1rem; justify-content:center; margin-top: 2.5rem;">
			<a class="icon-btn" target="_blank" href="https://github.com/Humen-debug">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 30 30">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2ZM0 12C0 5.3726 5.3726 0 12 0C18.6274 0 24 5.3726 24 12C24 18.6274 18.6274 24 12 24C5.3726 24 0 18.6274 0 12Z"
						stroke="none"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M9.59162 22.7357C9.49492 22.6109 9.49492 21.4986 9.59162 19.399C8.55572 19.4347 7.90122 19.3628 7.62812 19.1833C7.21852 18.9139 6.80842 18.0833 6.44457 17.4979C6.08072 16.9125 5.27312 16.8199 4.94702 16.6891C4.62091 16.5582 4.53905 16.0247 5.84562 16.4282C7.15222 16.8316 7.21592 17.9303 7.62812 18.1872C8.04032 18.4441 9.02572 18.3317 9.47242 18.1259C9.91907 17.9201 9.88622 17.1538 9.96587 16.8503C10.0666 16.5669 9.71162 16.5041 9.70382 16.5018C9.26777 16.5018 6.97697 16.0036 6.34772 13.7852C5.71852 11.5669 6.52907 10.117 6.96147 9.49369C7.24972 9.07814 7.22422 8.19254 6.88497 6.83679C8.11677 6.67939 9.06732 7.06709 9.73672 7.99999C9.73737 8.00534 10.6143 7.47854 12.0001 7.47854C13.386 7.47854 13.8777 7.90764 14.2571 7.99999C14.6365 8.09234 14.94 6.36699 17.2834 6.83679C16.7942 7.79839 16.3844 8.99999 16.6972 9.49369C17.0099 9.98739 18.2372 11.5573 17.4833 13.7852C16.9807 15.2706 15.9927 16.1761 14.5192 16.5018C14.3502 16.5557 14.2658 16.6427 14.2658 16.7627C14.2658 16.9427 14.4942 16.9624 14.8233 17.8058C15.0426 18.368 15.0585 19.9739 14.8708 22.6234C14.3953 22.7445 14.0254 22.8257 13.7611 22.8673C13.2924 22.9409 12.7835 22.9822 12.2834 22.9982C11.7834 23.0141 11.6098 23.0123 10.9185 22.948C10.4577 22.9051 10.0154 22.8343 9.59162 22.7357Z"
						stroke="none"
					/>
				</svg>
			</a>

			<a class="icon-btn" target="_blank">
				<p>CV</p>
			</a>

			<a class="icon-btn" target="_blank" href="mailto:humenchau@gmail.com">
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
						fill="black"
					/>
				</svg>
			</a>
		</div>
	</div>

	<div id="skills">
		<h3>Skills & Tools</h3>
	</div>

	<div id="projects" class="section">
		<h3>Projects</h3>
		{#each projects as project}
			<div class="project-card">
				<div class="left">
					<Carousel images={project.images} />
				</div>
				<div class="right">
					<h4>{project.title}</h4>
					<div class="row" style="gap: 0.5rem; flex-wrap: wrap;">
						{#each project.techs as tech}
							<Tag value={tech} />
						{/each}
					</div>
					<p style="margin: 1.5rem 0;">{project.description}</p>
					<div class="row" style="gap: 2rem;">
						<a
							class="outline-btn"
							target="_blank"
							href="https://github.com/Humen-debug/{project.github}"
						>
							<span class="row">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 30 30">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2ZM0 12C0 5.3726 5.3726 0 12 0C18.6274 0 24 5.3726 24 12C24 18.6274 18.6274 24 12 24C5.3726 24 0 18.6274 0 12Z"
										stroke="none"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M9.59162 22.7357C9.49492 22.6109 9.49492 21.4986 9.59162 19.399C8.55572 19.4347 7.90122 19.3628 7.62812 19.1833C7.21852 18.9139 6.80842 18.0833 6.44457 17.4979C6.08072 16.9125 5.27312 16.8199 4.94702 16.6891C4.62091 16.5582 4.53905 16.0247 5.84562 16.4282C7.15222 16.8316 7.21592 17.9303 7.62812 18.1872C8.04032 18.4441 9.02572 18.3317 9.47242 18.1259C9.91907 17.9201 9.88622 17.1538 9.96587 16.8503C10.0666 16.5669 9.71162 16.5041 9.70382 16.5018C9.26777 16.5018 6.97697 16.0036 6.34772 13.7852C5.71852 11.5669 6.52907 10.117 6.96147 9.49369C7.24972 9.07814 7.22422 8.19254 6.88497 6.83679C8.11677 6.67939 9.06732 7.06709 9.73672 7.99999C9.73737 8.00534 10.6143 7.47854 12.0001 7.47854C13.386 7.47854 13.8777 7.90764 14.2571 7.99999C14.6365 8.09234 14.94 6.36699 17.2834 6.83679C16.7942 7.79839 16.3844 8.99999 16.6972 9.49369C17.0099 9.98739 18.2372 11.5573 17.4833 13.7852C16.9807 15.2706 15.9927 16.1761 14.5192 16.5018C14.3502 16.5557 14.2658 16.6427 14.2658 16.7627C14.2658 16.9427 14.4942 16.9624 14.8233 17.8058C15.0426 18.368 15.0585 19.9739 14.8708 22.6234C14.3953 22.7445 14.0254 22.8257 13.7611 22.8673C13.2924 22.9409 12.7835 22.9822 12.2834 22.9982C11.7834 23.0141 11.6098 23.0123 10.9185 22.948C10.4577 22.9051 10.0154 22.8343 9.59162 22.7357Z"
										stroke="none"
									/>
								</svg>
								<p>GitHub</p>
							</span>
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div id="resume" class="section">
		<h3>Resume</h3>
	</div>

	<div id="contact">
		<h3>Contact</h3>
		<ContactForm />
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h3 {
		text-align: center;
		margin-top: 100px;
	}

	h4 {
		font-weight: 800;
		font-size: 1.2rem;
	}

	.section {
		min-height: 100vh;
		width: 100%;
	}

	#contact{
		width: 100%;
		margin-bottom: 8rem;
	}

	.center-content {
		justify-content: center;
		align-content: center;
		text-align: center;
	}

	.icon-btn {
		display: flex;
		width: 40px;
		height: 40px;
		align-items: center;
		justify-content: center;
		padding: 8px;
		border-radius: 999px;
		--background: var(--color-theme-1);
		--front-color: var(--color-bg-0);
		background-color: var(--background);
		color: var(--front-color);

		transition: all var(--transition-duration) linear;
		cursor: pointer;
	}

	.icon-btn:hover {
		--background: color-mix(in srgb, var(--color-theme-1) 70%, white);
	}

	.icon-btn svg path {
		fill: var(--front-color);
	}

	.icon-btn p {
		font-weight: 800;
		font-size: 1.5rem;
		color: var(--front-color);
	}

	.project-card {
		display: grid;
		grid-template-columns: 50% auto;
		column-gap: 2rem;
		margin-bottom: 2rem;
	}

	.project-card > div {
		align-self: center;
	}

	@media (min-width: 720px) {
		.project-card {
			column-gap: 4rem;
		}
	}

	@media (max-width: 480px) {
		.project-card {
			grid-template-columns: auto;
			grid-template-rows: 240px auto;
			margin-bottom: 4rem;
			row-gap: 2rem;
		}
	}
</style>
