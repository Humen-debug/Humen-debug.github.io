<script>
    function toggle(){
        window.document.body.classList.toggle('dark');
    }
</script>

<button on:click={toggle}>
    <slot/>
</button>

<style>
    button {
		background-color: var(--color-theme-1);
		color: var(--color-bg-0);
		border: none;
		border-radius: 4px;
		padding: 0.5rem;
		text-transform: uppercase;
	}
</style>