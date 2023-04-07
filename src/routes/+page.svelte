<script lang="ts">
    export let data:any;
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#if data?.keys }
    {#each data.keys as v }
    <div>
        { v.name }
    </div>
    {/each}
{/if}