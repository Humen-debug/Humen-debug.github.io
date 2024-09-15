<script lang="ts">
    export let name = "";
    export let email = "";
    export let message = "";

    let form: HTMLFormElement;

	function reset() {
		form?.reset();
	}

	function sendEmail() {
		const valid = form?.checkValidity();
		if (valid) {
		}
	}
</script>

<div>
    <form bind:this={form} id="contactForm" class="column w-fill" style="gap: 1.5rem;" >
        <input type="text" id="name" name="name" placeholder="Name" bind:value={name} required />
        <input type="email" id="email" name="email" placeholder="Email" bind:value={email} required />
        <textarea id="message" name="message" cols="50" rows="5" placeholder="Message" bind:value={message} required />
    </form>

    <div class="row" style="justify-content: flex-end; margin-top: 2.5rem; gap: 1rem">
        <button on:click={reset}>Reset</button>
        <button type="submit" on:click={sendEmail} form="contactForm">Send Email</button>
    </div>
</div>

<style>

	input[type='text'],
	input[type='email'],
	textarea {
		font-family: var(--font-body);
		display: block;
		margin: 0 auto;
		padding: 1.5rem 2rem;
		width: 90%;
		border-radius: 4px;
		border: 0.5px solid var(--color-bg-1);
		border-bottom: 0.3rem solid transparent;
		transition: all var(--transition-duration) linear;
	}
</style>