<script lang="ts">
    export let data:any;
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{ JSON.stringify(data) }


{#if data?.list }
    {#each data.list as v }
    <div>
        { v.title }
    </div>
    {/each}
{/if}

<div>
IP : { data?.ip }
</div>