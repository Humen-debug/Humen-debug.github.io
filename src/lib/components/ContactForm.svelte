<script lang="ts">
	import { t } from "$lib/locales/i18n";

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
        <input type="text" id="name" name="name" placeholder={$t('basic.name')} bind:value={name} required />
        <input type="email" id="email" name="email" placeholder={$t('basic.email')} bind:value={email} required />
        <textarea id="message" name="message" cols="50" rows="5" placeholder={$t('basic.message')} bind:value={message} required />
    </form>

    <div class="row" style="justify-content: flex-end; margin-top: 2.5rem; gap: 1rem">
        <button class="outline-btn" on:click={reset}>
			<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 21 21" fill="none">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3777 3.57178C11.6979 2.87386 9.82179 2.81018 8.09858 3.39259C6.37537 3.97501 4.92255 5.16382 4.01062 6.73769C3.87218 6.97662 3.56626 7.05808 3.32733 6.91964C3.0884 6.7812 3.00693 6.47528 3.14538 6.23635C4.17889 4.45263 5.82542 3.10531 7.77839 2.44524C9.73136 1.78517 11.8577 1.85734 13.7614 2.64832C15.6651 3.4393 17.2165 4.89517 18.1267 6.74486C19.0368 8.59454 19.2438 10.712 18.709 12.7029C18.1742 14.6938 16.934 16.4225 15.2195 17.5671C13.505 18.7118 11.4329 19.1943 9.38906 18.9248C7.34525 18.6554 5.469 17.6524 4.10967 16.1025C2.75034 14.5527 2.00059 12.5617 2 10.5002C1.99992 10.224 2.22372 10.0001 2.49986 10C2.776 9.99994 2.99992 10.2237 3 10.4999C3.00052 12.3188 3.66207 14.0756 4.86147 15.4431C6.06088 16.8107 7.71639 17.6957 9.51976 17.9334C11.3231 18.1711 13.1514 17.7454 14.6643 16.7354C16.1771 15.7255 17.2713 14.2002 17.7432 12.4435C18.2151 10.6868 18.0325 8.81845 17.2294 7.18637C16.4263 5.5543 15.0574 4.2697 13.3777 3.57178Z" fill="black"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.77614 2 4 2.22386 4 2.5V6H7.5C7.77614 6 8 6.22386 8 6.5C8 6.77614 7.77614 7 7.5 7H3.5C3.22386 7 3 6.77614 3 6.5V2.5C3 2.22386 3.22386 2 3.5 2Z" fill="black"/>
			  </svg>
			<span>{$t('basic.reset')}</span>
		</button>
        <button class="fill-btn" type="submit" on:click={sendEmail} form="contactForm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
				<path d="M3 20V4L22 12L3 20ZM5 17L16.85 12L5 7V10.5L11 12L5 13.5V17Z" fill="black"/>
			  </svg>
			<span>{$t('homepage.sendEmail')}</span>
		</button>
    </div>
</div>

<style>

	input[type='text'],
	input[type='email'],
	textarea {
		font-family: var(--font-body);
		display: block;
		margin: 0;
		padding: 1.5rem 2rem;
		width: 100%;
		border-radius: 4px;
		border: 0.5px solid var(--color-bg-1);
		border-bottom: 0.3rem solid transparent;
		transition: all var(--transition-duration) linear;
		box-sizing: border-box;
	}

	.outline-btn, 
	.fill-btn {
		--button-icon-size: 24px;
		--button-height: 44px;
	}
</style>