<script>
    export let color = "";
    export let value;
</script>

<div style="{color && color.length ? `border-color: ${color}; color: ${color};`: ''}">
    <p>{value}</p>
</div>

<style>
    div {
        display: flex; 
        justify-content: center;
        align-items: center;
        padding: 4px 0.5rem;
        text-align: center;
        border-radius: 32px; 
        border: 2px solid var(--color-theme-1);
        color: var(--color-theme-1);
        flex: 0 1 auto;
    }
    p {
        margin: auto;
        color: var(--color-theme-1);
    }
</style>